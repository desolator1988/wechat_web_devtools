'use strict';var _exports;function init(){function a(d,e,f){const g=require('../request/request.js');d?g({url:'http://apis.map.qq.com/ws/location/v1/ip?key=JMRBZ-R4HCD-X674O-PXLN4-B7CLH-42BSB',needToken:-1},(h,i,j)=>{let k={};h||200!==i.statusCode||(j=JSON.parse(j),0==j.status&&(k={latitude:j.result.location.lat,longitude:j.result.location.lng},k.errMsg='getLocation:ok')),k.errMsg||(k.errMsg='getLocation:fail timeout'),f(k)}):f({errMsg:`geoLocation:${c.failWroding}`})}function b(d,e){return d?{errMsg:'openLocation:ok'}:{errMsg:`openLocation:${c.failWroding}`}}const c=require('./sdkConfig.js');_exports={exec:(d,e,f,g)=>{let h=e.sdkName,i;'geoLocation'===h?a(d,e.args,g):'openLocation'===h&&(i=b(d,e.args),g(i))}}}init(),module.exports=_exports;