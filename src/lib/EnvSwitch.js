
 ///////////////////////////////////
 //     DEV ENVIROMNT SETUP
 //////////////////////////////////


export default function setEnv(domain, dev,prod) {
	 let url =window.location.toString();
	 let str=domain.toString().toLowerCase();
	 let isDev=false;
	 if( str.indexOf(",")>0){
       var domains = str.split(',');
			 for (var curDomain in domains) {
			    if(url.indexOf(domains[curDomain].trim().toLowerCase())>0) {
						dev();
						return;
					}
			 }
	 } else {
		 if(url.indexOf(str.trim().toLowerCase())>0) {
			   dev();
			 return;
		 }
	 }

		prod();
}
