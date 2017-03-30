
config {
  doctype = html5
  xmlprologue = none
  metaCharset = utf8
  renderCharset = utf-8
  admPanel = 0
  spamProtectEmailAddresses = 0
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
  baseURL = http://{$domain}/
  sys_language_mode = content_fallback
  pageTitleFirst = 1
  removeDefaultJS = 1
# Deafult language
  sys_language_uid = 0
  language = ru
  locale_all = ru_RU
  htmlTag_langKey  = ru
  sys_language_uid = 0
  linkVars = L,type,cHash
  uniqueLinkVars = 1
  #absRefPrefix = http://{$domain}/
  prefixLocalAnchors = all
  
  concatenateJs = 1
  concatenateCss = 1
  compressJs = 1
  compressCss = 1  
  
  typolinkCheckRootline = 1
  typolinkEnableLinksAcrossDomains = 1
}

page.config.headerComment (
    Programming by Dmitry Vasilev dmitry(at)typo3.ru.net
    ____________________________________________________
)

# Extbase exceptions
config.contentObjectExceptionHandler = 0

page.meta {
  revisit             = 1
  revisit-after       = 7 days
  imagetoolbar        = no
  keywords.field      = keywords
  keywords.ifEmpty    = {$page.meta.keywords}
  description.field   = description
  description.ifEmpty = {$page.meta.description}  
  #abstract.field      = abstract
  #abstract.ifEmpty    = {$page.meta.abstract}  
  #page-topic.field    = title
  #page-topic.ifEmpty  = {$page.meta.topic} 
  local_all           = ru_RU
  language            = ru
  #author              = {$page.meta.autor}  
  robots              = index,follow
  #robots               = noindex,nofollow
  viewport             = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no
  #MSSmartTagsPreventParsing = true
  SKYPE_TOOLBAR        = SKYPE_TOOLBAR_PARSER_COMPATIBLE
  
  
         # OpenGraph Tags
         /*
        og:title {
            attribute = property
            field = title
        }
        og:site_name {
            attribute = property
            data = TSFE:tmpl|setup|sitetitle
        }
        og:description = {$page.meta.description}
        og:description {
            attribute = property
            field = description
        }
        og:image {
            attribute = property
            stdWrap.cObject = FILES
            stdWrap.cObject {
                references {
                    data = levelfield:-1, media, slide
                }
                maxItems = 1
                begin = 1
                renderObj = COA
                renderObj {
                    10 = IMG_RESOURCE
                    10 {
                        file {
                            import.data = file:current:uid
                            treatIdAsReference = 1
                            maxWidth = 500c
                            #height = 720c
                        }
                        stdWrap {
                            typolink {
                                parameter.data = TSFE:lastImgResourceInfo|3
                                returnLast = url
                                forceAbsoluteUrl = 1
                            }
                        }
                    }
                }
            }
        }
    */
}

[globalVar = TSFE:id = 33||72||68||70||71]
	config.titleTagFunction >
[global]
