// @ts-nocheck
import React, { useEffect } from 'react';
import {Link } from 'react-router-dom';

const Index = ({ history }) => {
  console.log('history', history)
  useEffect(() => {
    debugger;
    history.block((r) => {
      console.log('aaa', r)
      return true;
      // return 'Are you sure you want to leave this page?';
    })
  }, [])
  return (
    <>
      <Link to="/">首页</Link><br />
      <Link to="/TestAdvacedGuides">测试高级指引</Link><br />
      <Link to="/TestRedux">测试使用redux</Link><br />
      <Link to="/UseTS">测试使用TS</Link><br />
      <Link to="/TestBullets">测试使用TestBullets</Link><br />
      <Link to="/TestList">测试使用TestList</Link><br />
      <Link to="/TestList2">TestList2</Link><br />
      <Link to="/TestSetState">TestSetState</Link><br />
      <Link to="/LifeCycleTest">LifeCycleTest</Link><br />
      <Link to="/TestHooks">TestHooks</Link><br />
      <Link to="/TestEvents">TestEvents</Link><br />
    </>
  )
}

export default Index;