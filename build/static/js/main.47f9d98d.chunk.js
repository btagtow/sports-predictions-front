(this["webpackJsonpsports-predictor"]=this["webpackJsonpsports-predictor"]||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),o=(a(37),a(9)),u=a(10),l=a(13),i=a(12),m=(a(38),a(3)),d=a(11),p=a(4),b=4328,g=4391,f=4424,E=4387,h=4380;function O(e){return function(t){t({type:"SWITCHING_LEAGUES"}),t({type:"SELECT_".concat(e)})}}function j(e,t){return function(a){a({type:"START_ADDING_UPCOMING_GAMES_".concat(e)}),fetch("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=".concat(t)).then((function(e){return e.json()})).then((function(e){return e.events})).then((function(t){return a({type:"ADD_UPCOMING_GAMES_".concat(e),upcomingGames:t})}))}}function N(e,t){return function(a){a({type:"START_ADDING_PAST_GAMES_".concat(e)}),fetch("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=".concat(t)).then((function(e){return e.json()})).then((function(e){return e.events})).then((function(t){return a({type:"ADD_PAST_GAMES_".concat(e),pastGames:t})})).then()}}function L(){return O("NFL")}function G(){return O("MLB")}function v(){return O("NBA")}function S(){return O("NHL")}function _(){return O("EPL")}var A=Object(m.b)(null,(function(e){return{aboutOn:function(){return function(e){return e({type:"ABOUT"})}}}}))((function(e){return r.a.createElement("div",null,r.a.createElement(d.b,{to:"/about"},r.a.createElement("button",{className:"dropdown-button clickable",onClick:function(){return e.aboutOn()}},"About")))}));var T=Object(m.b)(null,(function(e){return{profileOn:function(){return function(e){e({type:"PROFILE"})}(e)}}}))((function(e){return r.a.createElement("div",{className:"dropdown"},r.a.createElement(d.b,{to:"/profile"},r.a.createElement("button",{className:"dropdown-button clickable",onClick:function(){e.profileOn()}},"Profile")))})),y=a(15);var P=Object(m.b)(null,(function(e){return{gamesOn:function(){return function(e){e({type:"GAMES"})}(e)},selectNFL:function(){return e(L())},selectNBA:function(){return e(v())},selectNHL:function(){return e(S())},selectEPL:function(){return e(_())},selectMLB:function(){return e(G())}}}))((function(e){var t=e.id,a=e.name,n=e.emoji,c=e.select;return r.a.createElement("div",{className:"button-div"},r.a.createElement(d.b,{to:"/games"},r.a.createElement("button",{className:"drop-button",id:t,key:t,onClick:function(){e.gamesOn(),c()}},a,r.a.createElement("span",{role:"img","aria-label":a},"  ",n))))}));var I=Object(m.b)((function(e){return{leagues:e.leagues}}),(function(e){return{refreshProfile:function(t){return e({type:"REFRESH_PROFILE",payload:t})},adjustUserBettingPoints:function(t){return e({type:"ADJUST_POINTS",payload:t})},selectNFL:function(){return e(L())},selectNBA:function(){return e(v())},selectNHL:function(){return e(S())},selectEPL:function(){return e(_())},selectMLB:function(){return e(G())}}}))((function(e){var t=[];for(var a in e.leagues)t.push(e.leagues[a]);var n=function(t){switch(t.id){case 4391:return e.selectNFL;case 4328:return e.selectEPL;case 4424:return e.selectMLB;case 4380:return e.selectNHL;case 4387:return e.selectNBA;default:return null}};return r.a.createElement("div",{className:"league-button-container"},t.map((function(e){return r.a.createElement(P,{key:e.id,id:e.id,name:e.name,emoji:e.emoji,select:n(e)})})))}));var M=function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),c=a[0],s=a[1],o=e.leagues,u=e.switchLeague,l=e.resetProfile,i=e.isProfile,m=e.aboutOff;return r.a.createElement("div",{className:"dropdown",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},r.a.createElement("button",{className:"dropdown-button"},i?"Make Picks":"Select League"),c&&r.a.createElement("div",null,r.a.createElement(I,{leagues:o,switchLeague:u,resetProfile:l,aboutOff:m})))},w=a(17),B="http://localhost:3000/login",D=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:"",error:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(w.a)({},n,r))},e.addUser=function(t){e.props.logIn(t)},e.handleSubmit=function(t){t.preventDefault(),fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return 200===e.status?e.json():e.status})).then((function(t){t.token?(e.addUser(t.user),localStorage.setItem("token",t.token),localStorage.setItem("user_id",t.user_id)):alert("Username or password incorrect")})).catch((function(t){return e.setState({error:t.message})}))},e.handleError=function(){return e.state.error?r.a.createElement("p",{className:"error-message"},e.state.error):null},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"auth-form login",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"username",name:"username",value:t,placeholder:"username",onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",value:a,placeholder:"password",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"login",className:"auth-button"}),this.state.error?console.log(this.state.error):null))}}]),a}(r.a.Component);var C=Object(m.b)((function(e){return{isLoggedIn:e.isLoggedIn}}),(function(e){return{logIn:function(t){return e({type:"LOG_IN",payload:t})}}}))(D),U="http://localhost:3000/users",k=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",betting_points:100},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(w.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),fetch(U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e.state})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.message.username?alert("username ".concat(t.message.username)):t.message.password?alert("password ".concat(t.message.password)):(alert(t.message),localStorage.setItem("token",t.token),localStorage.setItem("user_id",t.user_id),e.props.setisLoginShown(!0))})),t.target.reset()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"auth-form signup",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"username",name:"username",value:t,placeholder:"username",onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",value:a,placeholder:"password",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"sign up!",className:"auth-button"})))}}]),a}(r.a.Component);var F=Object(m.b)((function(e){return{isLoggedIn:e.isLoggedIn,user:e.user}}),(function(e){return{logout:function(){return e({type:"LOG_OFF"})}}}))((function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(!0),u=Object(y.a)(o,2),l=u[0],i=u[1],m=Object(n.useState)(!1),d=Object(y.a)(m,2),p=d[0],b=d[1],g=function(){e.logout(),localStorage.clear(),b(!1),s(!1)};return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"dropdown-button clickable",onClick:e.isLoggedIn?g:function(){return p?g():s(!c)},onMouseOver:function(e){return function(e){return e.target.style.cursor="pointer"}(e)}},e.isLoggedIn?"Log out (".concat(e.user.username,")"):"Login or create account"),c&&!e.isLoggedIn&&r.a.createElement("div",{className:"forms-container"},l?r.a.createElement(C,{toggleIsLoggedIn:function(){b(!0)},setUserProfile:e.setUserProfile}):r.a.createElement(k,{setisLoginShown:i}),r.a.createElement("button",{className:"auth-button",onClick:function(){return i(!l)}},l?"Create an account":"Already have an account?")))}));var H=Object(m.b)((function(e){return{isLoggedIn:e.isLoggedIn}}),null)((function(e){return r.a.createElement("div",{className:"dropdown-and-forms"},r.a.createElement("div",{className:"dropdown-container"},r.a.createElement(A,null),e.isLoggedIn?r.a.createElement(T,null):null,r.a.createElement(M,null),r.a.createElement(F,null)))}));function R(e){var t=e.game,a=t.intHomeScore,n=t.intAwayScore;return r.a.createElement("div",{className:"game-card-container"},function(){var e=r.a.createElement("p",null,t.dateEvent," at ",t.strTime);return r.a.createElement("div",{className:"game-card",key:t.idEvent},r.a.createElement("h3",null,t.strEventAlternate),e,a&&n?a!==n?a>n?r.a.createElement("div",{className:"score-card"},r.a.createElement("h3",null,r.a.createElement("b",null,t.strHomeTeam,": ",a)),r.a.createElement("h4",null,t.strAwayTeam,": ",n)):r.a.createElement("div",{className:"score-card"},r.a.createElement("h4",null,t.strHomeTeam,": ",a),r.a.createElement("h3",null,r.a.createElement("b",null,t.strAwayTeam,": ",n))):r.a.createElement("div",{className:"score-card"},r.a.createElement("p",null,t.strHomeTeam,": ",a),r.a.createElement("p",null,t.strAwayTeam,": ",n)):r.a.createElement("p",null,"Outcome will be updated soon"))}())}function q(e){var t=e.currentLeague,a=e.selectGame,n=t.pastGames?t.pastGames:[],c=t.name,s=r.a.createElement("h3",null,"Past ",c," games:"),o=r.a.createElement("h3",{className:"no-games-message"},"No ",c," games available on our partner's database:",r.a.createElement("br",null),"https://www.thesportsdb.com/.",r.a.createElement("br",null),"Please try another league."),u=n.map((function(e){return r.a.createElement(R,{game:e,key:e.idEvent,selectGame:a})})),l=n[0]?s:o;return r.a.createElement("div",{className:"card-container"},l,u)}var W=a(20);function J(e){var t=e.game,a=e.submitSelectedGame,c=e.removeSelectedGame,s=Object(n.useState)(0),o=Object(y.a)(s,2),u=o[0],l=o[1];function i(e){return t.points_allocated=parseInt(t.points_allocated+e),t}return r.a.createElement("div",{className:"game-card",key:t.idEvent},r.a.createElement("p",null,t.strEventAlternate),r.a.createElement("h3",null,"Selected winner:",r.a.createElement("br",null),t.selectedWinnerString),r.a.createElement("button",{onClick:function(){l(u+1),i(1)},className:"game-button"},"Wager 1 point"),r.a.createElement("button",{onClick:function(){l(u+5),i(5)},className:"game-button"},"Wager 5 points"),r.a.createElement("button",{onClick:function(){l(u+10),i(10)},className:"game-button"},"Wager 10 points"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){a(t)},className:"game-button"},"Submit Selection"),r.a.createElement("button",{onClick:function(){c(t)},className:"game-button"},"Remove Selection"),r.a.createElement("p",null,"Points allocated:",u),r.a.createElement("p",null,t.dateEvent," at ",t.strTime))}function x(e){var t=e.selectedGames,a=e.submitSelectedGame,n=e.removeSelectedGame;return r.a.createElement("div",null,r.a.createElement("div",{className:"card-container"},t[0]?r.a.createElement("h3",null,"Your picks: "):r.a.createElement("h3",null,"Make a selection"),t.map((function(e){return r.a.createElement(J,{game:e,submitSelectedGame:a,removeSelectedGame:n,key:e.idEvent})}))))}function Y(e){var t=e.game,a=e.selectGame;function n(e){return t.selectedWinnerId=e.target.id,t.selectedWinnerString=e.target.value,t.points_allocated=0,a(t)}return r.a.createElement("div",{className:"game-card-container"},function(){var e=r.a.createElement("button",{className:"game-button",onClick:n,id:t.idHomeTeam,value:t.strHomeTeam},t.strHomeTeam," (home)"),a=r.a.createElement("button",{className:"game-button",onClick:n,id:t.idAwayTeam,value:t.strAwayTeam},t.strAwayTeam," (away)"),c=r.a.createElement("p",null,t.dateEvent," at ",t.strTime);return function(e){return parseInt(e.idLeague)===parseInt(4391)}(t)?r.a.createElement("div",{className:"game-card",key:t.idEvent},r.a.createElement("h3",null,t.strEventAlternate),c,a,e):r.a.createElement("div",{className:"game-card",key:t.idEvent},r.a.createElement("h3",null,t.strHomeTeam," vs. ",t.strAwayTeam),c,e,a)}())}function z(e){var t=e.currentLeague,a=e.selectGame,n=t.upcomingGames?t.upcomingGames:[],c=t.name,s=r.a.createElement("h3",null,"Upcoming ",c," games:"),o=r.a.createElement("h3",{className:"no-games-message"},"Upcoming games temporarily unavailable. Please come back soon!"),u=n.map((function(e){return r.a.createElement(Y,{game:e,key:e.idEvent,selectGame:a})}));return r.a.createElement("div",{className:"card-container"},n[0]?s:o,u)}function V(){return function(e){e({type:"START_CONFIRMING_USER"}),fetch("http://localhost:3000/users/".concat(localStorage.user_id),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(t){e({type:"CONFIRM_USER",user:t})}))}}function X(e){return function(t){t({type:"START_ADJUSTING_POINTS"}),fetch("http://localhost:3000/users/".concat(localStorage.user_id),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify({betting_points:e})}).then((function(e){return e.json()})).then((function(a){t({type:"ADJUST_POINTS",betting_points:e})}))}}var K=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedGames:[]},e.selectGame=function(t){e.state.selectedGames.find((function(e){return t.idEvent===e.idEvent}))?e.setState({selectedGames:Object(W.a)(e.state.selectedGames)}):e.setState({selectedGames:[].concat(Object(W.a)(e.state.selectedGames),[t])})},e.removeSelectedGame=function(t){var a=e.state.selectedGames.filter((function(e){return t.idEvent!==e.idEvent}));e.setState({selectedGames:a})},e.submitSelectedGame=function(t){var a=e.props.user.betting_points-t.points_allocated;if(e.props.isLoggedIn){if(a>=0)return e.props.submitGame(t),e.props.adjustPoints(a),e.removeSelectedGame(t);alert("Not enough points for this selection")}else alert("Please log in to make selections.")},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{currentLeague:this.props.currentLeague,selectGame:this.selectGame}),r.a.createElement(x,{selectedGames:this.state.selectedGames,submitSelectedGame:this.submitSelectedGame,removeSelectedGame:this.removeSelectedGame}))}}]),a}(n.Component);var Q=Object(m.b)((function(e){return{isLoggedIn:e.isLoggedIn,user:e.user}}),(function(e){return{confirmUserData:function(t){return e(V())},submitGame:function(t){return e(function(e){return function(t){t({type:"START_SUBMITTING_GAME"}),fetch("http://localhost:3000/game_selections",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){if(console.log(e),"Accepted"===e.message)return t({type:"SUBMIT_GAME",game:e.game_selection});alert("Error submitting picks, please try again.")}))}}(t))},adjustPoints:function(t){return e(X(t))}}}))(K);var $=Object(m.b)((function(e){return{leagues:e.leagues,isLoggedIn:e.isLoggedIn}}),(function(e){return{adjustUserBettingPoints:function(t){return e({type:"ADJUST_POINTS",payload:t})}}}))((function(e){var t=[];for(var a in e.leagues)t.push(e.leagues[a]);var n=t.find((function(e){return!0===e.selected}));return r.a.createElement("div",{className:"all-games-container"},r.a.createElement(q,{currentLeague:n}),r.a.createElement(Q,{currentLeague:n,adjustUserBettingPoints:e.adjustUserBettingPoints}))}));var Z=Object(m.b)((function(e){return{user:e.user}}),null)((function(e){return r.a.createElement("div",null,r.a.createElement("h4",null,"Your available betting points: ",e.user.betting_points))}));function ee(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"about-h1"},"Instructions:"),r.a.createElement("p",null,"First, you will want to create an account. You will be given 100 betting points. These are fictitious units with no monetary value. (But a heck of a lot of pride value!)"),r.a.createElement("p",null,"Use your betting points to bet on your favorite sport! (Provided that sport is soccer, basketball, baseball, hockey, or football)"),r.a.createElement("p",null,'Scroll over the "select league" dropdown at the top of this page and choose a league.'),r.a.createElement("p",null,'Next, browse through the "Upcoming Games" in your selected league and choose a winner for any game in which you are confident about the outcome.'),r.a.createElement("p",null,"After you select a game, the game will appear on the right side of the page. Here, choose the amount of betting points you'd like to spend."),r.a.createElement("p",null,"This is a ",r.a.createElement("b",null,'"NO ODDS CASINO"')," meaning regardless of the point spread, if you win your bet you will win the amount of betting points you placed on that game."),r.a.createElement("p",null,"Finally, select your profile at the top of the page to see your submitted games and the points you bet on them."),r.a.createElement("p",null,"We get our sports data through a crowd-sourced database. Please be patient with the results."),r.a.createElement("h3",null,"Speaking of our sports data, head on over to ",r.a.createElement("a",{href:"https://www.thesportsdb.com/"},"https://www.thesportsdb.com/")," and support them! "),r.a.createElement("h1",{className:"about-h1"}," GOOD LUCK AND MAY THE BETTING POINTS BE EVER IN YOUR FAVOR"))}function te(e){var t=e.game,a=e.deleteSubmittedGame,n=e.refreshUserProfile;return r.a.createElement("div",{className:"game-card",key:t.idEvent},r.a.createElement("p",null,t.strEventAlternate),r.a.createElement("h2",null,"Selected winner:",r.a.createElement("br",null),t.selectedWinnerString?t.selectedWinnerString:"No winner",t.completed?r.a.createElement("p",null,"COMPLETED"):null),r.a.createElement("h4",null,"Allocated points: ",t.points_allocated),r.a.createElement("button",{onClick:function(){return a(t),n()},className:"game-button"},"Remove Selection"),r.a.createElement("p",null,t.dateEvent," at ",t.strTime))}var ae=Object(m.b)((function(e){return{isLoggedIn:e.isLoggedIn,user:e.user}}),(function(e){return{confirmUserData:function(){return e(V())},deleteSubmittedGame:function(t,a){return e(function(e){return function(t){t({type:"START_DELETING_GAME"}),fetch("http://localhost:3000/game_selections/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){var a=e.deleted_game;return t({type:"DELETE_GAME",g:a})}))}}(t))},logout:function(){return e({type:"LOG_OFF"})},adjustPoints:function(t){return e(X(t))}}}))((function(e){var t=function(){e.confirmUserData()},a=function(t){return e.deleteSubmittedGame(t),e.adjustPoints(e.user.betting_points+t.points_allocated)};return r.a.createElement("div",null,r.a.createElement("h1",null,e.user.username),r.a.createElement("h4",null,"Betting points: ",e.user.betting_points),r.a.createElement("section",null,"Your selections:",r.a.createElement("button",{className:"refresh-button",onClick:t},r.a.createElement("span",{role:"img","aria-label":"refresh"},"\ud83d\udd04")),r.a.createElement("div",{className:"user-games"},function(){if(e.isLoggedIn)return e.user.game_selections.map((function(e){return r.a.createElement(te,{key:e.id,game:e,deleteSubmittedGame:a,refreshUserProfile:t})}))}())))})),ne=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).fetchGames=function(){e.props.fetchUpcomingGamesNFL(),e.props.fetchPastGamesNFL(),e.props.fetchUpcomingGamesMLB(),e.props.fetchPastGamesMLB(),e.props.fetchUpcomingGamesNBA(),e.props.fetchPastGamesNBA(),e.props.fetchUpcomingGamesNHL(),e.props.fetchPastGamesNHL(),e.props.fetchUpcomingGamesEPL(),e.props.fetchPastGamesEPL()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchGames()}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"headline-container"},r.a.createElement("h1",{className:"headline"},"Sports Predictor")),r.a.createElement("p",null,"Test your sports betting abilities"),r.a.createElement(H,null),r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(ee,null)),r.a.createElement(p.a,{exact:!0,path:"/about"},r.a.createElement(ee,null)),r.a.createElement(p.a,{exact:!0,path:"/profile"},r.a.createElement(ae,null)),r.a.createElement(p.a,{exact:!0,path:"/games"},r.a.createElement("div",null,this.props.isLoggedIn?r.a.createElement(Z,null):null,r.a.createElement($,null)))))}}]),a}(n.Component);var re=Object(m.b)((function(e){return{isLoggedIn:e.isLoggedIn}}),(function(e){return{fetchUpcomingGamesNFL:function(){return e(j("NFL",g))},fetchPastGamesNFL:function(){return e(N("NFL",g))},fetchUpcomingGamesMLB:function(){return e(j("MLB",f))},fetchPastGamesMLB:function(){return e(N("MLB",f))},fetchUpcomingGamesNBA:function(){return e(j("NBA",E))},fetchPastGamesNBA:function(){return e(N("NBA",E))},fetchUpcomingGamesNHL:function(){return e(j("NHL",h))},fetchPastGamesNHL:function(){return e(N("NHL",h))},fetchUpcomingGamesEPL:function(){return e(j("EPL",b))},fetchPastGamesEPL:function(){return e(N("EPL",b))}}}))(ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(14),se=a(31);var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return!0;case"LOG_OFF":return!1;default:return e}},ue=a(1);var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return t.payload;case"LOG_OFF":return{};case"REFRESH_PROFILE":return t.payload;case"START_ADJUSTING_POINTS":return Object(ue.a)({},e);case"ADJUST_POINTS":return Object(ue.a)(Object(ue.a)({},e),{},{betting_points:t.betting_points});case"START_REQUESTING_DATA":return Object(ue.a)(Object(ue.a)({},e),{},{requesting:!0});case"CONFIRM_USER_DATA":return t.user;case"START_SUBMITTING_GAME":return Object(ue.a)(Object(ue.a)({},e),{},{requesting:!0});case"SUBMIT_GAME":return alert("Game submitted"),Object(ue.a)(Object(ue.a)({},e),{},{game_selections:[].concat(Object(W.a)(e.game_selections),[t.game])});case"START_DELETING_GAME":return Object(ue.a)(Object(ue.a)({},e),{},{requesting:!0});case"DELETE_GAME":return Object(ue.a)(Object(ue.a)({},e),{},{game_selections:e.game_selections.filter((function(e){return e.id!==t.g.id}))});default:return e}};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"about",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ABOUT":return"about";case"PROFILE":return"profile";case"GAMES":return"games";default:return e}},me={EPL:{name:"EPL",id:4328,emoji:"\u26bd\ufe0f",pastGames:[],upcomingGames:[],selected:!1,requesting:!1},NFL:{name:"NFL",id:4391,emoji:"\ud83c\udfc8",pastGames:[],upcomingGames:[],selected:!1,requesting:!1},MLB:{name:"MLB",id:4424,emoji:"\u26be\ufe0f",pastGames:[],upcomingGames:[],selected:!0,requesting:!1},NHL:{name:"NHL",id:4380,emoji:"\ud83c\udfd2",pastGames:[],upcomingGames:[],selected:!1,requesting:!1},NBA:{name:"NBA",id:4387,emoji:"\ud83c\udfc0",pastGames:[],upcomingGames:[],selected:!1,requesting:!1}};var de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCHING_LEAGUES":return Object(ue.a)(Object(ue.a)({},e),{},{NFL:Object(ue.a)(Object(ue.a)({},e.NFL),{},{selected:!1}),EPL:Object(ue.a)(Object(ue.a)({},e.EPL),{},{selected:!1}),NBA:Object(ue.a)(Object(ue.a)({},e.NBA),{},{selected:!1}),NHL:Object(ue.a)(Object(ue.a)({},e.NHL),{},{selected:!1}),MLB:Object(ue.a)(Object(ue.a)({},e.MLB),{},{selected:!1})});case"SELECT_NFL":return Object(ue.a)(Object(ue.a)({},e),{},{NFL:Object(ue.a)(Object(ue.a)({},e.NFL),{},{selected:!0})});case"SELECT_MLB":return Object(ue.a)(Object(ue.a)({},e),{},{MLB:Object(ue.a)(Object(ue.a)({},e.MLB),{},{selected:!0})});case"SELECT_NHL":return Object(ue.a)(Object(ue.a)({},e),{},{NHL:Object(ue.a)(Object(ue.a)({},e.NHL),{},{selected:!0})});case"SELECT_NBA":return Object(ue.a)(Object(ue.a)({},e),{},{NBA:Object(ue.a)(Object(ue.a)({},e.NBA),{},{selected:!0})});case"SELECT_EPL":return Object(ue.a)(Object(ue.a)({},e),{},{EPL:Object(ue.a)(Object(ue.a)({},e.EPL),{},{selected:!0})});case"START_ADDING_UPCOMING_GAMES_NFL":return Object(ue.a)(Object(ue.a)({},e),{},{NFL:Object(ue.a)(Object(ue.a)({},e.NFL),{},{requesting:!0})});case"START_ADDING_UPCOMING_GAMES_MLB":return Object(ue.a)(Object(ue.a)({},e),{},{MLB:Object(ue.a)(Object(ue.a)({},e.MLB),{},{requesting:!0})});case"START_ADDING_UPCOMING_GAMES_NBA":return Object(ue.a)(Object(ue.a)({},e),{},{NBA:Object(ue.a)(Object(ue.a)({},e.NBA),{},{requesting:!0})});case"START_ADDING_UPCOMING_GAMES_NHL":return Object(ue.a)(Object(ue.a)({},e),{},{NHL:Object(ue.a)(Object(ue.a)({},e.NHL),{},{requesting:!0})});case"START_ADDING_UPCOMING_GAMES_EPL":return Object(ue.a)(Object(ue.a)({},e),{},{EPL:Object(ue.a)(Object(ue.a)({},e.EPL),{},{requesting:!0})});case"START_ADDING_PAST_GAMES_NFL":return Object(ue.a)(Object(ue.a)({},e),{},{NFL:Object(ue.a)(Object(ue.a)({},e.NFL),{},{requesting:!0})});case"START_ADDING_PAST_GAMES_MLB":return Object(ue.a)(Object(ue.a)({},e),{},{MLB:Object(ue.a)(Object(ue.a)({},e.MLB),{},{requesting:!0})});case"START_ADDING_PAST_GAMES_NBA":return Object(ue.a)(Object(ue.a)({},e),{},{NBA:Object(ue.a)(Object(ue.a)({},e.NBA),{},{requesting:!0})});case"START_ADDING_PAST_GAMES_NHL":return Object(ue.a)(Object(ue.a)({},e),{},{NHL:Object(ue.a)(Object(ue.a)({},e.NHL),{},{requesting:!0})});case"START_ADDING_PAST_GAMES_EPL":return Object(ue.a)(Object(ue.a)({},e),{},{EPL:Object(ue.a)(Object(ue.a)({},e.EPL),{},{requesting:!0})});case"ADD_UPCOMING_GAMES_NFL":return Object(ue.a)(Object(ue.a)({},e),{},{NFL:Object(ue.a)(Object(ue.a)({},e.NFL),{},{upcomingGames:t.upcomingGames,requesting:!1})});case"ADD_UPCOMING_GAMES_MLB":return Object(ue.a)(Object(ue.a)({},e),{},{MLB:Object(ue.a)(Object(ue.a)({},e.MLB),{},{upcomingGames:t.upcomingGames,requesting:!1})});case"ADD_UPCOMING_GAMES_NBA":return Object(ue.a)(Object(ue.a)({},e),{},{NBA:Object(ue.a)(Object(ue.a)({},e.NBA),{},{upcomingGames:t.upcomingGames,requesting:!1})});case"ADD_UPCOMING_GAMES_NHL":return Object(ue.a)(Object(ue.a)({},e),{},{NHL:Object(ue.a)(Object(ue.a)({},e.NHL),{},{upcomingGames:t.upcomingGames,requesting:!1})});case"ADD_UPCOMING_GAMES_EPL":return Object(ue.a)(Object(ue.a)({},e),{},{EPL:Object(ue.a)(Object(ue.a)({},e.EPL),{},{upcomingGames:t.upcomingGames,requesting:!1})});case"ADD_PAST_GAMES_NFL":return Object(ue.a)(Object(ue.a)({},e),{},{NFL:Object(ue.a)(Object(ue.a)({},e.NFL),{},{pastGames:t.pastGames,requesting:!1})});case"ADD_PAST_GAMES_MLB":return Object(ue.a)(Object(ue.a)({},e),{},{MLB:Object(ue.a)(Object(ue.a)({},e.MLB),{},{pastGames:t.pastGames,requesting:!1})});case"ADD_PAST_GAMES_NBA":return Object(ue.a)(Object(ue.a)({},e),{},{NBA:Object(ue.a)(Object(ue.a)({},e.NBA),{},{pastGames:t.pastGames,requesting:!1})});case"ADD_PAST_GAMES_NHL":return Object(ue.a)(Object(ue.a)({},e),{},{NHL:Object(ue.a)(Object(ue.a)({},e.NHL),{},{pastGames:t.pastGames,requesting:!1})});case"ADD_PAST_GAMES_EPL":return Object(ue.a)(Object(ue.a)({},e),{},{EPL:Object(ue.a)(Object(ue.a)({},e.EPL),{},{pastGames:t.pastGames,requesting:!1})});default:return e}},pe=Object(ce.c)({isLoggedIn:oe,user:le,mainContainerDisplay:ie,leagues:de}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,ge=Object(ce.e)(pe,be(Object(ce.a)(se.a)));console.log(ge.getState()),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:ge},r.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.47f9d98d.chunk.js.map