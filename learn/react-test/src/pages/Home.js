import React from 'react';



function stringify(json) {
    return Object.keys(json)
      .map(key => `${key}=${JSON.stringify(json[key])}`)
      .join('&');
  }
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {name: '111'},

                {name: '2222'},
                {name: '111'},

                {name: '2222'}, 
            ]
        }
    }

    change (item, index) {
        // let list = this.state.list.concat([]);
        this.state.list[index].name = item.name + '改变了';
        // this.setState({
        //     list
        // })
    }
    doFetch = () => {

        fetch('/fetch', {
            method: 'GET'
        })
        .then((res) => {
            console.log('success');
            console.log(res);
            return res;
        })
        .then(res => res.json())
        .then(c => {
            console.log('json', c);
        })
        .catch(e => {
            console.log('catch');
            console.log(e);
        })
    }

    fetchCors = () => {
        fetch('http://localtest1.com:3000/fetchcors', {
            method: 'GET'
        })
        .then((res) => {
            console.log('success');
            console.log(res);
            return res;
        })
        .then(res => res.json())
        .then(c => {
            console.log('json', c);
        })
        .catch(e => {
            console.log('catch');
            console.log(e);
        })
    }
    fetch302 = () => {
        console.log('fetch302')
        fetch('http://localtest2.com:3000/fetch302', {method: 'GET'})
        .then(res => {
            console.log('success res', res);
        })
        .catch(e => {
            console.log('error')
            console.log(e);
        })
    }
    fetchContenttype = () => {
        fetch('/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
           },
           body: stringify({
               a: 1,
               b: [1,3],
           })

        })
        .then((res) => {
            console.log('success');
            console.log(res);
            return res;
        })
        .then(res => res.json())
        .then(c => {
            console.log('json', c);
        })
        .catch(e => {
            console.log('catch');
            console.log(e);
        }) 
    }
    render () {
        let list = this.state.list;
        return (
            <div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index} onClick={this.change.bind(this, item, index)}>{item.name}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.doFetch}>不跨域发请求</button>
                <button onClick={this.fetchCors}>跨域请求</button>
                <button onClick={this.fetch302}>302</button>
                <button onClick={this.fetchContenttype}>contentType测试</button>
            </div>
        )
    }
}

export default Home;