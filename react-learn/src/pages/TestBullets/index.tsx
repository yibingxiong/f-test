// @ts-nocheck
import React, { useEffect, useState } from 'react';

import BulletScreen, { StyledBullet } from 'rc-bullets';

// @ts-ignore
const headUrl = 'https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';
export default function Demo() {
    // 弹幕屏幕
    const [screen, setScreen] = useState(null);
    // 弹幕内容
    const [bullet, setBullet] = useState('');
    useEffect(() => {
        // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
        let s = new BulletScreen('.screen', {
            duration: 5,
            trackHeight: 60,
            pauseOnHover: false,
            delay: '100ms'
        });
        // or
        // let s=new BulletScreen(document.querySelector('.screen));
        setScreen(s);
        generateBullet(s);
    }, []);
    const getRangeRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const generateBullet = (s) => {
        s.push(<div>3333</div>)
        setTimeout(() => {
            generateBullet(s)
        }, Math.floor(1000 * Math.random()) + 1000);
    }
    // 弹幕内容输入事件处理
    const handleChange = ({ target: { value } }) => {
        setBullet(value);
    };
    // 发送弹幕
    const handleSend = () => {
        if (bullet) {
            // push 纯文本
            // screen.push(bullet);
            // or 使用 StyledBullet

            screen.push(
                <div>
                    {bullet}
                </div>
            );
            // or 还可以这样使用，效果等同使用 StyledBullet 组件
            // screen.push({ msg: bullet, head: headUrl, color: "#eee" size="large" backgroundColor: "rgba(2,2,2,.3)" })
        }
    };
    return (
        <main>
            <div className="screen" style={{ width: '100vw', height: '120px' }}></div>
            <input value={bullet} onChange={handleChange} />
            <button onClick={handleSend}>发送</button>
        </main>
    );
}