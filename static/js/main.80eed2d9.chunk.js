(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{119:function(e,t){},200:function(e,t,n){},202:function(e,t,n){},223:function(e,t){},230:function(e,t){},237:function(e,t){},259:function(e,t){},261:function(e,t){},272:function(e,t){},274:function(e,t){},301:function(e,t){},303:function(e,t){},308:function(e,t){},310:function(e,t){},322:function(e,t){},334:function(e,t){},337:function(e,t){},379:function(e,t,n){"use strict";n.r(t);var r,a,s=n(8),c=n.n(s),o=n(194),i=n.n(o),u=(n(200),n(4)),l=n.n(u),p=n(10),b=n(31),h=(n(202),n(20)),f=n(29),d=n(38),v=n(37),x=n(0),w=function(e){var t=e.value?"https://test.whatsonchain.com/tx/".concat(e.value.tx):"",n=e.value?Object(x.jsx)("div",{className:"squareicon",children:e.value.n}):"";return Object(x.jsxs)("div",{className:"squarewapper",children:[Object(x.jsx)("button",{className:"".concat(e.winnerClass," square"),onClick:e.onClick,children:e.value?Object(x.jsx)("a",{href:t,target:"_blank",title:"Click to see the transaction",children:e.value.label}):e.value}),n]})},g=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"createBoard",value:function(e,t){for(var n=[],r=0,a=0;a<e;a+=1){for(var s=[],c=0;c<t;c+=1)s.push(this.renderSquare(r++));n.push(Object(x.jsx)("div",{className:"board-row",children:s},a))}return n}},{key:"renderSquare",value:function(e){var t=this,n=!this.props.winnerSquares||this.props.winnerSquares[0]!==e&&this.props.winnerSquares[1]!==e&&this.props.winnerSquares[2]!==e?"":"square--green";return Object(x.jsx)(w,{winnerClass:n,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},e)}},{key:"render",value:function(){return Object(x.jsx)("div",{children:this.createBoard(3,3)})}}]),n}(c.a.Component),j=n(2);!function(e){e.Testnet="testnet",e.Mainnet="mainnet",e.STN="STN"}(r||(r={})),function(e){e[e.ALL=65]="ALL",e[e.SINGLE=67]="SINGLE",e[e.NONE=66]="NONE",e[e.ANYONECANPAY_ALL=193]="ANYONECANPAY_ALL",e[e.ANYONECANPAY_SINGLE=195]="ANYONECANPAY_SINGLE",e[e.ANYONECANPAY_NONE=194]="ANYONECANPAY_NONE"}(a||(a={}));var m=function e(t){Object(h.a)(this,e),this.network=void 0,this.network=t},y=n(50),O=n.n(y);function N(e,t,n,r,a){t.inputs[n].output=new j.bsv.Transaction.Output({script:a.script,satoshis:a.satoshis});var s=new j.bsv.Transaction.Signature({publicKey:e.publicKey,prevTxId:a.txHash,outputIndex:a.outputIndex,inputIndex:n,signature:j.bsv.Transaction.Sighash.sign(t,e,r,n,t.inputs[n].output.script,t.inputs[n].output.satoshisBN),sigtype:r});return j.bsv.Script.buildPublicKeyHashIn(s.publicKey,s.signature.toDER(),s.sigtype).toHex()}function k(e){var t=new j.bsv.Transaction;return e.inputs.forEach((function(e){t.addInput(new j.bsv.Transaction.Input({prevTxId:e.utxo.txHash,outputIndex:e.utxo.outputIndex,script:e.script?j.bsv.Script.fromHex(e.script):new j.bsv.Script}),j.bsv.Script.fromHex(e.utxo.script),e.utxo.satoshis)})),e.outputs.forEach((function(e){t.addOutput(new j.bsv.Transaction.Output({script:j.bsv.Script.fromHex(e.script),satoshis:e.satoshis}))})),t}function P(e){return k(e).toString()}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.ALL,r=k(e);return Object(j.getPreimage)(r,j.bsv.Script.fromHex(e.inputs[t].utxo.script).toASM(),e.inputs[t].utxo.satoshis,t,n)}var I=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e,a){var s;return Object(h.a)(this,n),(s=t.call(this,e)).API_PREFIX=void 0,s.privKey=void 0,s.API_PREFIX="https://api.whatsonchain.com/v1/bsv/".concat(e==r.Testnet?"test":"main"),s.privKey=a?new j.bsv.PrivateKey.fromWIF(a):new j.bsv.PrivateKey.fromRandom(e),s}return Object(f.a)(n,[{key:"requestAccount",value:function(e,t){throw new Error("Method not implemented.")}},{key:"getbalance",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(this.API_PREFIX,"/address/").concat(this.privKey.toAddress(),"/balance"),{timeout:5e3});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.confirmed+n.unconfirmed);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signRawTransaction",value:function(){var e=Object(p.a)(l.a.mark((function e(t,n,r){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k(t),s=t.inputs[n].utxo,e.abrupt("return",N(this.privKey,a,n,r,s));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getSignature",value:function(){var e=Object(p.a)(l.a.mark((function e(t,n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k(t),e.abrupt("return",Object(j.signTx)(a,this.privKey,a.inputs[n].output.script.toASM(),a.inputs[n].output.satoshisBN,n,r));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"sendRawTransaction",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.max(1,t.length/2/1024),r=Math.max(1e4,1e3*n),e.next=4,O.a.post("".concat(this.API_PREFIX,"/tx/raw"),{txhex:t},{timeout:r});case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"listUnspent",value:function(){var e=Object(p.a)(l.a.mark((function e(t,n){var r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.a.get("".concat(this.API_PREFIX,"/address/").concat(this.privKey.toAddress(),"/unspent"),{timeout:1e4}).then((function(e){return e.data.filter((function(e){return e.value>=t})).map((function(e){return{txHash:e.tx_hash,outputIndex:e.tx_pos,satoshis:e.value,script:j.bsv.Script.buildPublicKeyHashOut(r.privKey.toAddress()).toHex()}}))})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRawChangeAddress",value:function(e){var t=this;return new Promise((function(e){return e(t.privKey.toAddress()+"")}))}},{key:"getPublicKey",value:function(e){var t=this;return new Promise((function(e){return e(Object(j.toHex)(t.privKey.publicKey))}))}}]),n}(m),K=2e3,A=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"setWallet",value:function(t){e.wallet=t}},{key:"version",value:function(){return"0.0.1"}},{key:"loadContract",value:function(e){return O.a.get(e,{timeout:1e4}).then((function(e){return{contractClass:Object(j.buildContractClass)(e.data),types:Object(j.buildTypeClasses)(e.data)}}))}},{key:"buildDeployTx",value:function(){var e=Object(p.a)(l.a.mark((function e(t,n,s,c){var o,i,u,b,h,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new I(r.Testnet,s),i=new I(r.Testnet,c),e.next=4,o.getRawChangeAddress();case 4:return u=e.sent,e.next=7,i.getRawChangeAddress();case 7:return b=e.sent,(h={inputs:[],outputs:[]}).outputs.push({script:t.lockingScript.toHex(),satoshis:2*n}),f=n+K,e.abrupt("return",o.listUnspent(f,{purpose:"change"}).then(function(){var e=Object(p.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}throw new Error("no utxos");case 2:if(h.inputs.push({utxo:t[0],script:"",sequence:0}),!((r=t[0].satoshis-n-K)<=0)){e.next=6;break}throw new Error("fund is not enough");case 6:return h.outputs.push({script:j.bsv.Script.buildPublicKeyHashOut(u).toHex(),satoshis:r}),e.abrupt("return",h);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){return i.listUnspent(f,{purpose:"change"}).then(function(){var t=Object(p.a)(l.a.mark((function t(r){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==r.length){t.next=2;break}throw new Error("no utxos");case 2:if(e.inputs.push({utxo:r[0],script:"",sequence:0}),!((a=r[0].satoshis-n-K)<=0)){t.next=6;break}throw new Error("fund is not enough");case 6:return e.outputs.push({script:j.bsv.Script.buildPublicKeyHashOut(b).toHex(),satoshis:a}),t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).then((function(e){return o.signRawTransaction(e,0,a.ALL).then((function(t){return e.inputs[0].script=t,e}))})).then((function(e){return i.signRawTransaction(e,1,a.ALL).then((function(t){return e.inputs[1].script=t,e}))})));case 12:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"sendRawTx",value:function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.wallet.sendRawTransaction(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"sendTx",value:function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.wallet.sendRawTransaction(P(n)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"deploy",value:function(){var t=Object(p.a)(l.a.mark((function t(n,r,a,s){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.buildDeployTx(n,r,a,s).then(function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.sendTx(n).then((function(e){return[n,e]})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}()}]),e}();A.wallet=void 0;var C=n(79),T=new(function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n),(e=t.call(this)).player="",e.privKey="",e.deleteGame=function(){console.log("deleteGame"),window.localStorage.removeItem("game")},e.createGame=function(e){return e.event="createGame",console.log("createGame",e),window.localStorage.setItem("game",JSON.stringify(e))},e.saveGame=function(e,t){e.event=t,console.log("saveGame",e),window.localStorage.setItem("game",JSON.stringify(e))},e.getGame=function(){var e=window.localStorage.getItem("game");if(e&&null!==e)return JSON.parse(e)},e.getCurrentPlayer=function(){return e.player},e.savePrivateKey=function(t){e.privKey=t,window.localStorage.setItem(e.player,t)},e.getPrivateKey=function(){return e.player&&(e.privKey=window.localStorage.getItem(e.player)),e.privKey},e.getBobPrivateKey=function(){return window.localStorage.getItem("bob")},e.getAlicePrivateKey=function(){return window.localStorage.getItem("alice")};var r=new URLSearchParams(window.location.search);e.player=r.get("player")||"alice";var a=Object(C.a)(e);return window.addEventListener("storage",(function(t){if(console.log("on storage change "+e.player,t),"game"===t.key)try{var n=window.localStorage.getItem("game");if(n&&null!==n){var r=JSON.parse(n);r.event&&a.emit(r.event,r)}}catch(t){console.error(" storage change error",t)}}),!1),e}return Object(f.a)(n,[{key:"addDeployedListener",value:function(e){console.log("addDeployedListener"),this.on("deployed",e)}},{key:"removeDeployedListener",value:function(e){console.log("removeDeployedListener"),this.off("deployed",e)}},{key:"addNextListener",value:function(e){console.log("addNextListener"),this.on("next",e)}},{key:"removeNextListener",value:function(e){console.log("removeNextListener"),this.off("next",e)}}]),n}(n(41).EventEmitter)),L=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n+=1){var r=Object(b.a)(t[n],3),a=r[0],s=r[1],c=r[2];if(e[a]&&e[s]&&e[c]&&e[a].label===e[s].label&&e[a].label===e[c].label)return{winner:e[a],winnerRow:t[n]}}return{winner:null,winnerRow:null}},E={history:[{squares:Array(9).fill(null)}],currentStepNumber:0,xIsNext:!0},H=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(h.a)(this,n),r=t.call(this,e),e.game&&e.game.gameState?r.state=e.game.gameState:r.state=E,r}return Object(f.a)(n,[{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps",e),e.game&&e.game.gameState?this.setState(e.game.gameState):this.setState(E)}},{key:"calculateNewState",value:function(e){return(this.state.xIsNext?"01":"00")+e.map((function(e){return e&&"X"===e.label?"01":e&&"O"===e.label?"02":"00"})).join("")}},{key:"checkIfValid",value:function(e,t){if(!this.props.game||!this.props.game.lastUtxo)return!1;if(L(t).winner||t[e])return!1;t[e]={label:this.state.xIsNext?"X":"O"};var n=T.getCurrentPlayer();return!("alice"!==n||!this.state.xIsNext)||("bob"===n&&!this.state.xIsNext||(alert("now is ".concat(this.state.xIsNext?"Alice":"Bob"," turn ")),console.error("now is ".concat(this.state.xIsNext?"Alice":"Bob"," turn , but got ").concat(n)),!1))}},{key:"buildCallContractTx",value:function(){var e=Object(p.a)(l.a.mark((function e(t,n,r,s){var c,o,i,u,p,b,h,f,d,v,x,w,g,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c="",o=L(r).winner,i=3e3,u=[],p=this.props.game.lastUtxo.satoshis-i,!o){e.next=13;break}return e.next=8,A.wallet.getRawChangeAddress();case 8:b=e.sent,c=j.bsv.Script.buildPublicKeyHashOut(b).toHex(),u.push({satoshis:p,script:c}),e.next=14;break;case 13:s.length>=9?(h=new j.bsv.PublicKey(this.props.game.alicePubKey,{network:j.bsv.Networks.testnet}),f=new j.bsv.PublicKey(this.props.game.bobPubKey,{network:j.bsv.Networks.testnet}),d=j.bsv.Script.buildPublicKeyHashOut(h.toAddress(j.bsv.Networks.testnet)).toHex(),v=j.bsv.Script.buildPublicKeyHashOut(f.toAddress(j.bsv.Networks.testnet)).toHex(),p=(this.props.game.lastUtxo.satoshis-i)/2,u.push({satoshis:p,script:d}),u.push({satoshis:p,script:v})):(c=[this.props.contractInstance.codePart.toHex(),j.bsv.Script.fromASM(n).toHex()].join(""),u.push({satoshis:p,script:c}));case 14:if(!(u[0].satoshis<=0)){e.next=17;break}return alert("fund in contract is too low "),e.abrupt("return",void 0);case 17:return x={inputs:[{utxo:this.props.game.lastUtxo,sequence:0,script:""}],outputs:u},w=S(x),e.next=21,A.wallet.getSignature(x,0,a.ALL,!0);case 21:return g=e.sent,m=this.props.contractInstance.move(t,new j.Sig(Object(j.toHex)(g)),p,w).toHex(),x.inputs[0].script=m,e.abrupt("return",x);case 25:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,s,c,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.history.slice(0,this.state.currentStepNumber+1),r=n[n.length-1],a=r.squares.slice(),this.checkIfValid(t,a)){e.next=6;break}return console.error("handleClick checkIfValid false..."),e.abrupt("return");case 6:return s=this.calculateNewState(a),e.next=9,this.buildCallContractTx(t,s,a,n);case 9:if(c=e.sent){e.next=13;break}return console.error("buildCallContractTx fail..."),e.abrupt("return");case 13:A.sendTx(c).then((function(e){a[t].tx=e,a[t].n=n.length;var r,s={history:n.concat([{squares:a,currentLocation:(r=t,{0:"row: 1, col: 1",1:"row: 1, col: 2",2:"row: 1, col: 3",3:"row: 2, col: 1",4:"row: 2, col: 2",5:"row: 2, col: 3",6:"row: 3, col: 1",7:"row: 3, col: 2",8:"row: 3, col: 3"}[r]),stepNumber:n.length}]),xIsNext:!o.state.xIsNext,currentStepNumber:n.length};T.saveGame(Object.assign({},o.props.game,{gameState:s,lastUtxo:{txHash:e,outputIndex:0,satoshis:c.outputs[0].satoshis,script:c.outputs[0].script}}),"next"),o.setState(s)})).catch((function(e){e.response&&alert("sendTx errror: "+e.response.data),console.error("sendTx errror",e.response)}));case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n,r,a=this,s=this.state.history,c=s[this.state.currentStepNumber],o=L(c.squares),i=o.winner,u=o.winnerRow,l=T.getGame();n="bob"===T.getCurrentPlayer()?Object(x.jsxs)("div",{className:"bob",children:["Bob",Object(x.jsx)("img",{src:"/tic-tac-toe/bob.png"})]}):Object(x.jsxs)("div",{className:"alice",children:["Alice",Object(x.jsx)("img",{src:"/tic-tac-toe/alice.jpg"})]}),l&&l.deploy&&(r=Object(x.jsxs)("div",{className:"bet",children:[Object(x.jsx)("a",{href:"https://test.whatsonchain.com/tx/".concat(l.deploy),target:"_blank",children:"Bet transaction"})," "]}));T.getCurrentPlayer();if(i){var p="X"===i.label?"Alice":"Bob";e="Winner is ".concat(p),l&&l.lastUtxo&&(t=Object(x.jsxs)("div",{className:"end",children:[Object(x.jsx)("a",{href:"https://test.whatsonchain.com/tx/".concat(l.lastUtxo.txHash),target:"_blank",children:"Withdraw transaction"})," "]}))}else if(10===s.length)e="Draw. No one won.",l&&l.lastUtxo&&(t=Object(x.jsxs)("div",{className:"end",children:[Object(x.jsx)("a",{href:"https://test.whatsonchain.com/tx/".concat(l.lastUtxo.txHash),target:"_blank",children:"Withdraw transaction"})," "]}));else{var b=this.state.xIsNext?"Alice":"Bob";e="Next player: ".concat(b)}return Object(x.jsx)("div",{className:"game",children:Object(x.jsxs)("div",{className:"game-board",children:[Object(x.jsxs)("div",{className:"game-title",children:[n,Object(x.jsxs)("div",{className:"game-status",children:[" ",e," "]})]}),Object(x.jsx)(g,{squares:c.squares,winnerSquares:u,onClick:function(e){return a.handleClick(e)}}),Object(x.jsxs)("div",{className:"game-bottom",children:[r,t]})]})})}}]),n}(c.a.Component);var R=function(e){c.a.useReducer((function(e){return!e}))[1];var t=Object(s.useRef)(null),n=function(t){e.cancelBet()};if(e.started)return Object(x.jsxs)("div",{children:["The game is in progress ...",Object(x.jsx)("button",{className:"pure-button cancel",onClick:n,children:"Restart"})]});if(e.game&&e.game.creator===T.getCurrentPlayer()){var r="alice"===T.getCurrentPlayer()?"bob":"alice",a=window.location.href.split("?")[0];return Object(x.jsxs)("div",{children:["Waiting someone join the game ...",Object(x.jsx)("a",{className:"pure-button",href:a+"?player="+r,target:"_blank",children:" Join"}),Object(x.jsx)("button",{className:"pure-button cancel",onClick:n,children:"Restart"})]})}return e.game&&e.game.creator!==T.getCurrentPlayer()?Object(x.jsx)("div",{children:"Joining the game..."}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("label",{children:["Bet amount:",Object(x.jsx)("input",{ref:t,type:"number",name:"amount",placeholder:"in satoshis"})]}),Object(x.jsx)("button",{className:"start",onClick:function(n){if(A.wallet){var r=parseInt(t.current.value);r<2e4?alert("The bet fund is too small to play, at least 20000"):isNaN(r)?console.error("".concat(t.current.value," is not number")):e.startBet(r)}else alert("Pelease create wallet first")},children:"Start Bet"})]})},q=n(195);var B=function(e){var t=Object(s.useState)(""),n=Object(b.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(0),i=Object(b.a)(o,2),u=i[0],l=i[1];Object(s.useEffect)((function(){A.wallet?(A.wallet.getRawChangeAddress().then((function(e){c(e)})),A.wallet.getbalance().then((function(e){l(e)}))):T.getPrivateKey()&&(A.setWallet(new I(r.Testnet,T.getPrivateKey())),A.wallet.getRawChangeAddress().then((function(e){c(e)})))})),function(e,t){var n=Object(s.useRef)();Object(s.useEffect)((function(){n.current=e})),Object(s.useEffect)((function(){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}),[t])}((function(){A.wallet&&A.wallet.getbalance().then((function(e){console.log("update balance old: ".concat(u," new: ").concat(e)),0===u&&e>0&&alert("Successfully deposit, try F5 to reload the page"),l(e)}))}),5e3);return A.wallet?Object(x.jsxs)("div",{className:"wallet",children:[Object(x.jsxs)("div",{className:"walletInfo",children:[Object(x.jsx)("div",{className:"address",children:Object(x.jsxs)("label",{children:["Address: ",a]})}),Object(x.jsx)("div",{className:"balance",children:Object(x.jsxs)("label",{children:["Balance: ",u]})}),Object(x.jsxs)("div",{className:"fundtips",children:[Object(x.jsxs)("label",{children:["You can fund the address with ",Object(x.jsx)("a",{href:"https://faucet.bitcoincloud.net",target:"_blank",children:Object(x.jsx)("span",{children:" faucets"})})]}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"warnning",children:"Warnning: Testnet only, don't funds it with your real coin."})]})]}),Object(x.jsx)("div",{className:"walletqrcode",children:Object(x.jsx)(q,{value:a})})]}):Object(x.jsx)("div",{className:"wallet",children:Object(x.jsx)("button",{className:"pure-button button-large",onClick:function(e){try{var t=new j.bsv.PrivateKey.fromRandom("testnet");c(t.toAddress()+""),A.setWallet(new I(r.Testnet,t.toWIF())),T.savePrivateKey(t.toWIF())}catch(e){console.log("wallet onChange error",e)}},children:"Create Wallet"})})};var G=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(null),o=Object(b.a)(a,2),i=o[0],u=o[1],h=c.a.useReducer((function(e){return!e}))[1],f=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("startBet with amount",t),!A.wallet){e.next=16;break}return e.next=4,A.wallet.getbalance();case 4:if(n=e.sent,!(t>n)){e.next=8;break}return alert("Please fund your wallet address first"),e.abrupt("return");case 8:return e.next=10,A.wallet.getPublicKey();case 10:r=e.sent,a=T.getCurrentPlayer(),s={amount:t,tx:{inputs:[],outputs:[]},name:"tic-tac-toe",alicePubKey:"",bobPubKey:"",creator:a,player:"",date:new Date},"alice"===a?Object.assign(s,{alicePubKey:r}):Object.assign(s,{bobPubKey:r}),T.createGame(s),h();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("onDeployed..."),t&&t.alicePubKey&&t.bobPubKey&&w(t.alicePubKey,t.bobPubKey),r(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("onNext",t),h();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function w(e,t){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(l.a.mark((function e(t,n){var r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==i||!t||!n){e.next=10;break}return e.next=3,A.loadContract("/tic-tac-toe/tictactoe_desc.json");case 3:return r=e.sent,a=r.contractClass,(s=Object(j.newCall)(a,[new j.PubKey(Object(j.toHex)(t)),new j.PubKey(Object(j.toHex)(n))])).setDataPart("00000000000000000000"),u(s),console.log("fetchContract successfully"),e.abrupt("return",s);case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(p.a)(l.a.mark((function e(t,n,a){var s,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("joinGame...",t),e.next=3,A.wallet.getPublicKey();case 3:return s=e.sent,e.next=6,A.wallet.getbalance();case 6:if(!(e.sent<=t.amount)){e.next=10;break}return alert("no available utxos or  balance is not enough, please fund your wallet"),e.abrupt("return");case 10:return"alice"===(c=T.getCurrentPlayer())?Object.assign(t,{alicePubKey:s,player:c}):Object.assign(t,{bobPubKey:s,player:c}),e.next=14,w(t.alicePubKey,t.bobPubKey);case 14:o=e.sent,console.log("fetchContract",o,c),null!=o&&A.deploy(o,t.amount,n,a).then((function(e){var n=Object(b.a)(e,2),a=n[0],s=n[1];t.lastUtxo={txHash:s,outputIndex:0,satoshis:a.outputs[0].satoshis,script:a.outputs[0].script},t.tx=a,t.deploy=s,T.saveGame(t,"deployed"),r(!0)})).catch((function(e){"no utxos"===e.message&&alert("no available utxos, please fund your wallet"),console.error("deploy error",e)}));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){if(A.wallet){var e=T.getGame();e&&e.lastUtxo&&r(!0),e&&e.alicePubKey&&e.bobPubKey&&w(e.alicePubKey,e.bobPubKey);var t=T.getAlicePrivateKey(),n=T.getBobPrivateKey();e&&!e.deploy&&t&&n&&function(e,t,n){m.apply(this,arguments)}(e,t,n)}else setTimeout((function(){alert("Please create your wallet and fund it")}),1e3);return T.addDeployedListener(d),T.addNextListener(v),function(){T.removeDeployedListener(d),T.removeNextListener(v)}}),[i]);var y=T.getGame();return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h2",{children:"Play Tic-Tac-Toe on Bitcoin"}),Object(x.jsx)(R,{startBet:f,cancelBet:function(){T.deleteGame(),r(!1),h()},started:n,game:y}),Object(x.jsx)(H,{game:y,contractInstance:i}),Object(x.jsx)(B,{})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,380)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(G,{})}),document.getElementById("root")),_()}},[[379,1,2]]]);
//# sourceMappingURL=main.80eed2d9.chunk.js.map