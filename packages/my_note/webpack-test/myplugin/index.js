const ReplaceSource = require('webpack-sources/lib/ReplaceSource');
const crypto = require('crypto');

function addIfNotExist(set, item) {
  if (set.has(item)) return true;
  set.add(item);
  return false;
}

function findChunksWebpack4(chunk) {
  var allChunks = new Set();
  var groupsVisited = new Set();

  (function recurseChunk(childChunk) {
    function recurseGroup(group) {
      if (addIfNotExist(groupsVisited, group.id)) return;
      group.chunks.forEach(recurseChunk);
      group.childrenIterable.forEach(recurseGroup);
    }

    if (addIfNotExist(allChunks, childChunk)) return;
    childChunk.groupsIterable.forEach(recurseGroup);
  })(chunk);

  return allChunks;
}

function computeIntegrity(source) {
    var hash = crypto
      .createHash('sha384')
      .update(source, "utf8")
      .digest("base64");
    return  "sha384-" + hash;
}

function makePlaceholder(id) {
  return "*-*-*-CHUNK-SRI-HASH-" + id + "-*-*-*";
}


function replaceAsset(
  assets,
  hashByChunkId,
  chunkFile
) {
  var oldSource = assets[chunkFile].source();
  var newAsset;
  var magicMarker;
  var magicMarkerPos;

  newAsset = new ReplaceSource(assets[chunkFile]);

  Array.from(hashByChunkId.entries()).forEach(function replaceMagicMarkers(idAndHash) {
    console.log('id and hash');
    console.log(idAndHash);
    magicMarker = makePlaceholder(idAndHash[0]);
    magicMarkerPos = oldSource.indexOf(magicMarker);
    if (magicMarkerPos >= 0) {
      newAsset.replace(
        magicMarkerPos,
        (magicMarkerPos + magicMarker.length) - 1,
        idAndHash[1]);
    }
  });

  // eslint-disable-next-line no-param-reassign
  assets[chunkFile] = newAsset;

  newAsset.integrity = computeIntegrity(newAsset.source());

  console.log(newAsset.integrity);
  return newAsset;
};

class MyExampleWebpackPlugin {
    apply(compiler) {

      compiler.hooks.afterPlugins.tap('generateSRI', (compiler) => {
        // The assets has been optimized.
        compiler.hooks.thisCompilation.tap('generateSRI', (compilation) => {
          compilation.sriChunkAssets = {};

          compilation.hooks.afterOptimizeAssets.tap('generateSRI', (assets) => {
            console.log('--------afterOptimizeAssets');
            var newAsset;
            var hashByChunkId = new Map();
          
            compilation.chunks.forEach(function forEachChunk(chunk) {

              Array.from(findChunksWebpack4(chunk)).reverse().forEach(childChunk => {
                var sourcePath;
                console.log('2--------');
                // This can happen with invalid Webpack configurations
                if (childChunk.files.length === 0) return;
            
                sourcePath = compilation.sriChunkAssets[childChunk.id];
            
                if (childChunk.files.indexOf(sourcePath) < 0) {
                  sourcePath = childChunk.files[0];
                }
            
                newAsset = replaceAsset(
                  assets,
                  hashByChunkId,
                  sourcePath);
                hashByChunkId.set(childChunk.id, newAsset.integrity);
              });
            });
          });
          // An asset from a chunk was added to the compilation.
          compilation.hooks.chunkAsset.tap('generateSRI', (chunk, asset) => { 
            compilation.sriChunkAssets[chunk.id] = asset;
          });
          
          compiler.hooks.compilation.tap('HtmlWebpackPluginHooks', this.registerHwpHooks.bind(this, alterAssetTags, beforeHtmlGeneration));
        })
      });
    }
}

module.exports = MyExampleWebpackPlugin;