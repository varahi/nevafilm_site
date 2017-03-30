################
# Footer Menu 1
################
lib.footerMenu1 >
lib.footerMenu1 = COA
lib.footerMenu1 {
  15 = COA
  15 {
    10 = HMENU
    10.special = list
    10.special.value = {$page.footer.menu1}
    10 {
      1 = TMENU
      1.NO.allWrap = <h4 class="page-footer__header">|</h4>
      1.NO.doNotLinkIt = 1
    }
  }
  20 = HMENU
  20.special = directory
  20.special.value = {$page.footer.menu1}
  20 {
    1 = TMENU
    1.wrap = <ul class="__links">|</ul>
    1 {
      noBlur = 1
      expAll = 1
      NO {
        wrapItemAndSub = <li>|</li>
        ATagTitle.field = description // title
      }
      ACT = 1
      ACT {
        wrapItemAndSub = <li>|</li>
        ATagTitle.field = description // title  
        #ATagParams = class="current"      
      }
    }
  }
}

################
# Footer Menu 2
################
lib.footerMenu2 >
lib.footerMenu2 = COA
lib.footerMenu2 {
  10 = COA
  10 {
    10 = HMENU
    10.special = list
    10.special.value = {$page.footer.menu2}
    10 {
      1 = TMENU
      1.NO.allWrap = <h4 class="page-footer__header">|</h4>
      1.NO.doNotLinkIt = 1
    }
  }
  20 = HMENU
  20.special = directory
  20.special.value = {$page.footer.menu2}
  20 {
    1 = TMENU
    1.wrap = <ul class="__links">|</ul>
    1 {
      noBlur = 1
      expAll = 1
      NO {
        wrapItemAndSub = <li>|</li>
        ATagTitle.field = description // title
      }
    }
  }
}

################
# Footer Menu 3
################
lib.footerMenu3 >
lib.footerMenu3 = COA
lib.footerMenu3 {
  10 = COA
  10 {
    10 = HMENU
    10.special = list
    10.special.value = {$page.footer.menu3}
    10 {
      1 = TMENU
      1.NO.allWrap = <h4 class="page-footer__header">|</h4>
      1.NO.doNotLinkIt = 1
    }
  }
  20 = HMENU
  20.special = directory
  20.special.value = {$page.footer.menu3}
  20 {
    1 = TMENU
    1.wrap = <ul class="__links">|</ul>
    1 {
      noBlur = 1
      expAll = 1
      NO {
        wrapItemAndSub = <li>|</li>
        ATagTitle.field = description // title
      }
    }
  }
}

################
# Footer Menu 4
################
lib.footerMenu4 >
lib.footerMenu4 = COA
lib.footerMenu4 {
  10 = COA
  10 {
    10 = HMENU
    10.special = list
    10.special.value = {$page.footer.menu4}
    10 {
      1 = TMENU
      1.NO.allWrap = <h4 class="page-footer__header">|</h4>
      1.NO.doNotLinkIt = 1
    }
  }
  20 = HMENU
  20.special = directory
  20.special.value = {$page.footer.menu4}
  20 {
    1 = TMENU
    1.wrap = <ul class="__links">|</ul>
    1 {
      noBlur = 1
      expAll = 1
      NO {
        wrapItemAndSub = <li>|</li>
        ATagTitle.field = description // title
      }
    }
  }
}

################
# Footer Menu 5
################
lib.footerMenu5 >
lib.footerMenu5 = COA
lib.footerMenu5 {
  10 = COA
  10 {
    10 = HMENU
    10.special = list
    10.special.value = {$page.footer.menu5}
    10 {
      1 = TMENU
      1.NO.allWrap = <h4 class="page-footer__header">|</h4>
      1.NO.doNotLinkIt = 1
    }
  }
  20 = HMENU
  20.special = directory
  20.special.value = {$page.footer.menu5}
  20 {
    1 = TMENU
    1.wrap = <ul class="__links">|</ul>
    1 {
      noBlur = 1
      expAll = 1
      NO {
        wrapItemAndSub = <li>|</li>
        ATagTitle.field = description // title
      }
    }
  }
}



