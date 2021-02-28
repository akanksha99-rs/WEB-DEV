const puppeteer= require("puppeteer") ;
const id="powerfulmanofdholakpur" ;
const pwd ="Chutki" ;

(async function()
{
   try{
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      });

      let pages = await browser.pages() ;
      let tab= pages[0] ;
      await tab.goto("https://www.instagram.com/");
      await tab.waitForSelector('input[name="username"]') ;
      await tab.type('input[name="username"]' , id) ;
      await tab.type('input[name="password"]' ,pwd) ;
      await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}), tab.click('.sqdOP.L3NKy.y3zKF ')]) ;  //login button
      await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}), tab.click('.sqdOP.yWX7d.y3zKF ')]) ;  //dialogue box
      
      await tab.click('.aOOlW.HoLwm  ') ;  //dialogue box
      await tab.type('.XTCLo.x3qfX' , "Pepcoding") ; //search box
      await tab.waitForSelector('.-qQT3 ', {visible:true}) ;
      let allProfiles = await tab.$$('.-qQT3') ;
      let pepcoding = allProfiles[0];
      await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}), pepcoding.click()]) ;  //pepcoding box
      await tab.waitForSelector('._9AhH0', {visible:true}) ;
      let firstPost = await tab.$('._9AhH0') ;
      await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}), firstPost.click()]) ; 
      for(let i=0 ; i<500 ; i++){
        await tab.waitForSelector('.ltpMr.Slqrh .wpO6b', {visible:true}) ;
        let likeBtn = await tab.$('.ltpMr.Slqrh .wpO6b');  
        await likeBtn.click();
        await tab.click('._65Bje.coreSpriteRightPaginationArrow') ;  //next 
      }

   }

   catch{
       console.log("error") ;
   }
}) () ;