const _0x24745b=_0x4d5a;(function(_0x362ef0,_0x556a4c){const _0x224ba2=_0x4d5a,_0xe19392=_0x362ef0();while(!![]){try{const _0x3236b6=-parseInt(_0x224ba2(0x1d2))/0x1+-parseInt(_0x224ba2(0x1db))/0x2*(parseInt(_0x224ba2(0x1ec))/0x3)+parseInt(_0x224ba2(0x205))/0x4*(parseInt(_0x224ba2(0x1c6))/0x5)+parseInt(_0x224ba2(0x1d6))/0x6+-parseInt(_0x224ba2(0x1c4))/0x7+parseInt(_0x224ba2(0x1fe))/0x8*(parseInt(_0x224ba2(0x1bb))/0x9)+-parseInt(_0x224ba2(0x1d8))/0xa*(-parseInt(_0x224ba2(0x1eb))/0xb);if(_0x3236b6===_0x556a4c)break;else _0xe19392['push'](_0xe19392['shift']());}catch(_0x28b7d1){_0xe19392['push'](_0xe19392['shift']());}}}(_0x5538,0x9b02e));var i=0x0;let text='',title='',time_status='',convert_time='',permission='-',name='',splitname='',firstname='',lastname='';window[_0x24745b(0x202)][_0x24745b(0x1df)](_0x24745b(0x1f6))[_0x24745b(0x1c7)](_0x24745b(0x1e8),_0x3bbdb6=>{const _0x54cd85=_0x24745b;i++;if(_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1cd)]==localStorage['getItem'](_0x54cd85(0x1d1))&&_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1f3)]=='presence'){if(_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1cc)]==_0x54cd85(0x1cb))inOutError(_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1e7)]);else{if(_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1fc)]==_0x54cd85(0x207))inOutMultiple(_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1e7)]);else{name=_0x3bbdb6['data'][_0x54cd85(0x1c2)],splitname=name[_0x54cd85(0x1dc)]('\x20'),firstname=splitname[0x0];if(typeof splitname[0x1]!=='undefined')lastname=splitname[0x1];document['getElementById'](_0x54cd85(0x1c2))[_0x54cd85(0x1f5)]=firstname+'\x20'+lastname,document[_0x54cd85(0x1c5)](_0x54cd85(0x1ff))[_0x54cd85(0x1f5)]=_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1ff)],document[_0x54cd85(0x1c5)](_0x54cd85(0x1da))[_0x54cd85(0x1f5)]=_0x3bbdb6['data'][_0x54cd85(0x1da)],document[_0x54cd85(0x1c5)](_0x54cd85(0x1e1))['innerHTML']=_0x3bbdb6['data']['start'],document[_0x54cd85(0x1c5)](_0x54cd85(0x206))['innerHTML']=_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1de)];if(_0x3bbdb6['data'][_0x54cd85(0x1dd)]!='')permission=_0x54cd85(0x1c0)+_0x3bbdb6['data'][_0x54cd85(0x1dd)]+_0x54cd85(0x1e4);else permission='-';document[_0x54cd85(0x1c5)](_0x54cd85(0x1dd))['innerHTML']=permission,_0x3bbdb6[_0x54cd85(0x1ef)]['title']=='In'?_0x3bbdb6[_0x54cd85(0x1ef)]['status']==_0x54cd85(0x1be)?time_status=_0x54cd85(0x203):(_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x20b)]>0x0?convert_time=_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x20b)]+_0x54cd85(0x1f0)+_0x3bbdb6['data'][_0x54cd85(0x1e3)]+_0x54cd85(0x1ca):convert_time=_0x3bbdb6['data'][_0x54cd85(0x1e3)]+_0x54cd85(0x1ca),time_status=_0x54cd85(0x1fa)+convert_time):_0x3bbdb6[_0x54cd85(0x1ef)]['status']=='Late'?(Math[_0x54cd85(0x1ce)](_0x3bbdb6['data'][_0x54cd85(0x20b)])>0x0?convert_time=Math[_0x54cd85(0x1ce)](_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x20b)])+_0x54cd85(0x1f0)+Math[_0x54cd85(0x1ce)](_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1e3)])+'\x20Menit':convert_time=Math[_0x54cd85(0x1ce)](_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1e3)])+_0x54cd85(0x1ca),time_status=_0x54cd85(0x1fa)+convert_time):time_status=_0x54cd85(0x1c3),$(_0x54cd85(0x1bc))[_0x54cd85(0x1e2)](_0x54cd85(0x1d9),_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1e0)]),_0x3bbdb6[_0x54cd85(0x1ef)][_0x54cd85(0x1e7)]=='In'?title=_0x54cd85(0x1d4):title=_0x54cd85(0x1d0),document['getElementById'](_0x54cd85(0x1ea))[_0x54cd85(0x1f5)]=time_status,toastr[_0x54cd85(0x1c1)](text,_0x54cd85(0x1f4)+title+_0x54cd85(0x1c8)),reloadUserPresence();}}console['log'](_0x3bbdb6[_0x54cd85(0x1ef)]);}});function inOutSuccess(_0x2a8ede,_0x45f2cd,_0x5f4783,_0x21aa77){const _0x4c9d62=_0x24745b;_0x2a8ede=='In'?(_0x2a8ede='Masuk',_0x45f2cd==_0x4c9d62(0x1be)?text=_0x4c9d62(0x1fd):text=_0x4c9d62(0x201)+_0x5f4783+_0x4c9d62(0x1f0)+_0x21aa77+_0x4c9d62(0x1ca)):(_0x2a8ede='Keluar',_0x45f2cd==_0x4c9d62(0x1f1)?text='Anda\x20Presensi\x20Keluar\x20Lebih\x20Awal\x20'+Math['abs'](_0x5f4783)+'\x20Jam\x20'+Math['abs'](_0x21aa77)+_0x4c9d62(0x1ca):text=_0x4c9d62(0x1d7)),toastr['success'](text,_0x4c9d62(0x1f4)+_0x2a8ede+_0x4c9d62(0x1c8));}function _0x4d5a(_0xb0eb3a,_0x51e741){const _0x55387e=_0x5538();return _0x4d5a=function(_0x4d5a0a,_0x2d2751){_0x4d5a0a=_0x4d5a0a-0x1b9;let _0x2cbfa2=_0x55387e[_0x4d5a0a];return _0x2cbfa2;},_0x4d5a(_0xb0eb3a,_0x51e741);}function inOutError(_0x28756f){const _0x21d4a6=_0x24745b;_0x28756f=='In'?_0x28756f=_0x21d4a6(0x1d4):_0x28756f=_0x21d4a6(0x1d0),toastr[_0x21d4a6(0x1cf)](text,_0x21d4a6(0x1f4)+_0x28756f+_0x21d4a6(0x1f9));}function inOutMultiple(_0x5cb8aa){const _0x2d52b9=_0x24745b;_0x5cb8aa=='In'?_0x5cb8aa=_0x2d52b9(0x1d4):_0x5cb8aa=_0x2d52b9(0x1d0),toastr[_0x2d52b9(0x1cf)](_0x2d52b9(0x1e6)+_0x5cb8aa,'Presensi\x20'+_0x5cb8aa+_0x2d52b9(0x1f9));}function _0x5538(){const _0x2f5bc5=['company_id','1117539GuGwzu','qrcode','Masuk','offsetWidth','6425814XRaLSO','Anda\x20Presensi\x20Keluar\x20Tepat\x20Waktu','1079270bHzEMy','src','position','1652kccgTW','split','permission','end','channel','profile','clock_in','attr','minutes','</span>','/today_presence?created_by=','Anda\x20Sudah\x20Melakukan\x20Presensi\x20','title','.UserEvent','log','time_status','55CqORbq','1197zIaSEw','#2390D7','getItem','data','\x20Jam\x20','Early','trigger','type','Presensi\x20','innerHTML','user-channel','canvas','insertContent.owl','\x20Gagal','Presensi\x20Terlambat\x20','/qrtoken?created_by=','status','Anda\x20Presensi\x20Masuk\x20Tepat\x20Waktu','600328JCdoNP','emp_id','sans','Anda\x20Presensi\x20Masuk\x20Terlambat\x20','Echo','Presensi\x20Tepat\x20Waktu','#qr','553424nfBLIL','clock_out','Multiple','token','item','get','hours','ajax','empty','72ieEegE','#images','Genius\x20HR','Ontime','json','<span\x20class=\x22inline-flex\x20items-center\x20justify-center\x20px-2\x20py-1\x20text-xs\x20font-bold\x20leading-none\x20text-white\x20bg-yellow-500\x20rounded\x22>','success','name','Presensi\x20On\x20Time','1870743bRJilR','getElementById','5TUSZPE','listen','\x20Berhasil','setInterval','\x20Menit','Invalid','status_qr','created_by','abs','error','Keluar'];_0x5538=function(){return _0x2f5bc5;};return _0x5538();}let getsize=document['getElementById']('qr')[_0x24745b(0x1d5)];$(document)['ready'](function(){const _0x329276=_0x24745b;$['get'](host+'/qrtoken?created_by='+localStorage[_0x329276(0x1ee)](_0x329276(0x1d1)),function(_0x69cac){const _0x3fc353=_0x329276;$('#qr')[_0x3fc353(0x1ba)](),jQuery(_0x3fc353(0x204))['qrcode']({'render':_0x3fc353(0x1f7),'size':getsize-0x32,'minVersion':0x4,'maxVersion':0x28,'ecLevel':'H','radius':0.3,'quiet':0x2,'text':_0x69cac[_0x3fc353(0x208)],'mode':0x2,'label':_0x3fc353(0x1bd),'fontname':'sans','fontcolor':_0x3fc353(0x1ed)});});}),window[_0x24745b(0x1c9)](function(){const _0x472ce9=_0x24745b;$[_0x472ce9(0x20a)](host+_0x472ce9(0x1fb)+localStorage[_0x472ce9(0x1ee)](_0x472ce9(0x1d1)),function(_0x370e1f){const _0x3fac74=_0x472ce9;$(_0x3fac74(0x204))[_0x3fac74(0x1ba)](),jQuery(_0x3fac74(0x204))[_0x3fac74(0x1d3)]({'render':_0x3fac74(0x1f7),'size':getsize-0x32,'minVersion':0x4,'maxVersion':0x28,'ecLevel':'H','radius':0.3,'quiet':0x2,'text':_0x370e1f[_0x3fac74(0x208)],'mode':0x2,'label':_0x3fac74(0x1bd),'fontname':_0x3fac74(0x200),'fontcolor':_0x3fac74(0x1ed)});});},interval);function reloadUserPresence(){const _0x3bbb9f=_0x24745b;$[_0x3bbb9f(0x1b9)]({'url':host+_0x3bbb9f(0x1e5)+localStorage[_0x3bbb9f(0x1ee)]('company_id'),'dataType':_0x3bbb9f(0x1bf),'success':function(_0x23b9be){const _0xeca854=_0x3bbb9f;var _0x4ef668='';for(i in _0x23b9be[_0xeca854(0x1ef)]){_0x4ef668+=_0x23b9be[_0xeca854(0x1ef)][i][_0xeca854(0x209)];}owl[_0xeca854(0x1f2)](_0xeca854(0x1f8),_0x4ef668),console[_0xeca854(0x1e9)](_0x23b9be['today']);}});}