# ==============================================
# FE-Plugin configuration for EXT:news
# ==============================================
plugin.tx_news {
	mvc.callDefaultActionIfActionCantBeResolved = 1

	view {
		templateRootPaths {
			0 = EXT:news/Resources/Private/Templates/
			1 = {$plugin.tx_news.view.templateRootPath}
		}

		partialRootPaths {
			0 = EXT:news/Resources/Private/Partials/
			1 = {$plugin.tx_news.view.partialRootPath}
		}

		layoutRootPaths {
			0 = EXT:news/Resources/Private/Layouts/
			1 = {$plugin.tx_news.view.layoutRootPath}
		}

		widget.GeorgRinger\News\ViewHelpers\Widget\PaginateViewHelper.templateRootPath = EXT:nevafilm_site/Resources/Private/Extensions/news/Templates/
	}

	# Modify the translation
	_LOCAL_LANG {
		default {
			more-link_more = more >>
		}
	}

	# ====================================
	# Settings available inside Controller and View by accessing $this->settings or {settings.xyz}
	# ====================================
	settings {
		cssFile = {$plugin.tx_news.settings.cssFile}

		#Displays a dummy image if the news have no media items
		displayDummyIfNoMedia = 1

		# Output format
		format = html

		# general settings
		overrideFlexformSettingsIfEmpty = cropMaxCharacters,dateField,timeRestriction,orderBy,orderDirection,backPid,listPid,startingpoint,recursive,list.paginate.itemsPerPage,list.paginate.templatePath
		allowEmptyStringsForOverwriteDemand = 0

		includeSubCategories = 0

		analytics {
			social {
				facebookLike = 1
				facebookShare = 1
				twitter = 1
			}
		}

		detailPidDetermination = flexform, categories, default

		defaultDetailPid = 0
		dateField = datetime

		link {
			typesOpeningInNewWindow = 2
			hrDate = 0
			hrDate {
				day = j
				month = n
				year = Y
			}

			skipControllerAndAction = 0
		}

		cropMaxCharacters = 150
		orderBy = datetime
		orderDirection = desc
		topNewsFirst = 0
		orderByAllowed = sorting,author,uid,title,teaser,author,tstamp,crdate,datetime,categories.title

		facebookLocale = ru_RU
		googlePlusLocale = ru
		disqusLocale = ru

		demandClass =


		# --------------
		#  Search
		# --------------
		search {
			fields = teaser,title,bodytext
		}

		# --------------
		#  Detail
		# --------------
		detail {
			errorHandling = pageNotFoundHandler
			checkPidOfNewsRecord = 0
			registerProperties = keywords,title
			showPrevNext = 0
			showSocialShareButtons = 1
			disqusShortname =

			# media configuration
			media {
				image {
					maxWidth = 350
					maxHeight =

					# Get lightbox settings from css_styled_content
					lightbox {
						enabled = {$styles.content.imgtext.linkWrap.lightboxEnabled}
						class = {$styles.content.imgtext.linkWrap.lightboxCssClass}
						width = {$styles.content.imgtext.linkWrap.width}
						height = {$styles.content.imgtext.linkWrap.height}
						rel = lightbox[myImageSet]
					}
				}

				video {
					width = 282
					height = 300
				}
			}
		}

    # --------------
    #  Large
    # --------------
    large {
      media {
        image {
          width = 350c
          height = 260c
        }
      }
    }
    
    # --------------
    #  List News
    # --------------
    listNews {
      media {
        image {
          width = 100c
          height = 100c
        }
      }
    }    
		# --------------
		#  List
		# --------------
		list {
			# media configuration
			mainMedia {
        image {
          maxWidth = 450
          maxHeight = 434
        }			  
			}
			media {
				image {
					maxWidth = 100
					maxHeight = 100
					width = 225c
					height = 213c
				}

				dummyImage = typo3conf/ext/news/Resources/Public/Images/dummy-preview-image.png
			}

			# Paginate configuration.
			paginate {
				itemsPerPage = 10
				insertAbove = 0
				insertBelow = 1
				templatePath =
				prevNextHeaderTags = 1
				maximumNumberOfLinks = 3
			}

			rss {
				channel {
					title = {$plugin.tx_news.rss.channel.title}
					description = {$plugin.tx_news.rss.channel.description}
					language = {$plugin.tx_news.rss.channel.language}
					copyright = {$plugin.tx_news.rss.channel.copyright}
					generator = {$plugin.tx_news.rss.channel.generator}
					link = {$plugin.tx_news.rss.channel.link}
				}
			}
		}

		# Opengraph implementation
		opengraph {
			site_name = {$plugin.tx_news.opengraph.site_name}
			type = article
			admins =
			email =
			phone_number =
			fax_number =
			latitude =
			longitude =
			street-address =
			locality =
			region =
			postal-code =
			country-name =

			twitter {
				card = {$plugin.tx_news.opengraph.twitter.card}
				site = {$plugin.tx_news.opengraph.twitter.site}
				creator = {$plugin.tx_news.opengraph.twitter.creator}
			}
		}
	}
}

# EXT:fluid_styled_content uses different constants
[globalVar = LIT:0<{$styles.content.textmedia.maxW}]
	plugin.tx_news.settings.detail.media.image.lightbox {
		enabled = {$styles.content.textmedia.linkWrap.lightboxEnabled}
		class = {$styles.content.textmedia.linkWrap.lightboxCssClass}
		width = {$styles.content.textmedia.linkWrap.width}
		height = {$styles.content.textmedia.linkWrap.height}
	}
[global]


# Rendering of content elements in detail view
lib.tx_news.contentElementRendering = RECORDS
lib.tx_news.contentElementRendering {
	tables = tt_content
	source.current = 1
	dontCheckPid = 1
}

# Rendering of news, displayed by "Insert Record" content element
tt_content.shortcut.20.tables := addToList(tx_news_domain_model_news)
tt_content.shortcut.20.conf.tx_news_domain_model_news = USER
tt_content.shortcut.20.conf.tx_news_domain_model_news {
	userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
	extensionName = News
	pluginName = Pi1
	vendorName = GeorgRinger
	switchableControllerActions {
		News {
			1 = detail
		}
	}

	settings =< plugin.tx_news.settings
	settings {
		singleNews.field = uid
		useStdWrap = singleNews
		insertRecord = 1
	}
}
# For fluid_styled_content
tt_content.shortcut.variables.shortcuts.tables := addToList(tx_news_domain_model_news)
tt_content.shortcut.variables.shortcuts.conf.tx_news_domain_model_news < tt_content.shortcut.20.conf.tx_news_domain_model_news

# ==============================================
# BE-module configuration for EXT:news
# ==============================================
module.tx_news < plugin.tx_news
module.tx_news {
	settings.list.paginate.itemsPerPage = 25
}

# ==============================================
# Persistence object mapping configuration
# ==============================================
config.tx_extbase.persistence.classes {
	GeorgRinger\News\Domain\Model\News {
		subclasses {
			0 = GeorgRinger\News\Domain\Model\NewsDefault
			1 = GeorgRinger\News\Domain\Model\NewsExternal
			2 = GeorgRinger\News\Domain\Model\NewsInternal
		}
	}

	GeorgRinger\News\Domain\Model\NewsDefault {
		mapping {
			recordType = 0
			tableName = tx_news_domain_model_news
		}
	}

	GeorgRinger\News\Domain\Model\NewsExternal {
		mapping {
			recordType = 1
			tableName = tx_news_domain_model_news
		}
	}

	GeorgRinger\News\Domain\Model\NewsInternal {
		mapping {
			recordType = 2
			tableName = tx_news_domain_model_news
		}
	}
}