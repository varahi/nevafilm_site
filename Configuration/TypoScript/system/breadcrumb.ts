################
# Breadcrump
################
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <div class="breadcrumbs"><ul>|</ul></div>
  10 = HMENU
  10.includeNotInMenu = 0
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = title // subtitle
            stdWrap.htmlSpecialChars = 1
            stdWrap.field = title
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li class="current">|</li>
            doNotLinkIt = 1
        }
      }
    }
  }
  
[globalVar = GP:tx_news_pi1|news > 0]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <div class="breadcrumbs"><ul>|</ul></div>
  10 = HMENU
  10 {
    special = rootline
    special.range =  1 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = title // subtitle
            stdWrap.htmlSpecialChars = 1
            stdWrap.field = title
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li>|</li>
            doNotLinkIt = 0
              }
            }
          }

  # Add news title if on single view
    20 = RECORDS
    20 {
      if.isTrue.data = GP:tx_news_pi1|news
        dontCheckPid = 1
        tables = tx_news_domain_model_news
        source.data = GP:tx_news_pi1|news
        source.intval = 1
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news {
          field = title
          htmlSpecialChars = 1
        }
      wrap =  <li class="current">|</li>
      }
  }
  
  
#[PIDinRootline = 2] 
#[global]


#[globalVar = TSFE:id = 73||37||87||20]
#  lib.breadcrumb >
#[global]