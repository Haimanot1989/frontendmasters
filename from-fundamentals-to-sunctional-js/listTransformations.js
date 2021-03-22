#!/usr/bin/env node
"use strict";
const _= {};
_.each = function(list, callback) {
    if( Array.isArray(list)){
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else {
        for (var key in list){
            callback(list[list[key], key, list])
        }
    }
}

_.map = function(list, callback) {
    var storage = [];

    _.each(list, function(v, i, list){
        storage.push(callback(v, i, list));
    });
/*     for (let i = 0; i < list.length; i++) {
        storage.push(callback(list[i], i, list));        
    }
 */
    return storage;
}

//console.log(_.map([1,2,3], function(val){return val + 1;}));


/* _.each(['sally', 'georgie', 'porgie'], function(name, i, list){
    if(list[i + 1]) {
        console.log(name + 'is younger than ' + list[i + 1]);
        } else {
            console.log(name, 'is the oldest');
        }
    }); */

    _.filter = function( arr, cb) {
        const storage = [];
/* 
         for (let i = 0; i < arr.length; i++) {
            if( cb(arr[i], i, arr) === true){
                storage.push(arr[i])
            }
        }
 */      
    _.each(arr, function(v, i, arr){
            if( cb(v, i, arr)) storage.push(v);
        })
        return storage;
    }

    const videoData = [
        {
            name: 'Miss Scarlet',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Mrs. White',
            present: false,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Reverend Green',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Rusty',
            present: false,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Colonel Mustard',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Professor Plum',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        }
    ];
        
var suspects = _.filter(videoData, function(suspectObject) {
    return suspectObject.present;
})

console.log(_.map(suspects, s => s.name));
