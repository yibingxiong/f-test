import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
      title: 'u',
      home: Scaffold(
        appBar: null,
        body: Container(
          decoration: new BoxDecoration(
            color: Colors.white,
          ),
          child: new Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Container(
                  color: Colors.red,
                  child: Column(
                    children: <Widget>[
                      Padding(
                          padding: new EdgeInsets.fromLTRB(20, 40, 20, 20),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                '左边的',
                                style: TextStyle(
                                  color: Colors.white,
                                ),
                              ),
                              Text(
                                '右边的',
                                style: TextStyle(
                                  color: Colors.white,
                                ),
                              ),
                            ],
                          )),
                      Padding(
                          padding: new EdgeInsets.fromLTRB(20, 0, 20, 20),
                          child: Container(
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.all(Radius.circular(5.0)),
                            ),
                            child: Padding(
                              padding: EdgeInsets.fromLTRB(10, 0, 0, 0),
                              child: TextField(
                                decoration: InputDecoration(
                                  icon: Icon(Icons.search, color: Colors.grey),
                                  labelText: '请输入关键词',
                                  labelStyle: new TextStyle(color: Colors.black12),
                                  fillColor: Colors.white,
                                  filled: true,
                                  enabledBorder: InputBorder.none,
                                  focusedBorder: InputBorder.none,
                                ),
                                cursorColor: Colors.black12,
                              ),
                            )

                          ))
                    ],
                  )),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.red,
              ),
            ],
          ),
        ),
      )));
}
