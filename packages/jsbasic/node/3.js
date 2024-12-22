function getIdFromUrl (index) {
  const pathname = '/tc/150430100000/1238147484965306368.shtml';
  const reg = /(\/[\s\S]+?)?(\/tc)?\/(\d+)\/(\d+)\.s?html/;
  const matches = pathname.match(reg);
  console.log(matches);
}

getIdFromUrl(1)