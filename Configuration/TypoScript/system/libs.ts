lib.logo >
lib.logo = COA
lib.logo {
  wrap = |
  10 = IMAGE
  10 {
    file = {$template_path}/Resources/Public/img/nevafilm-logo.png
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 150
    file.height = 39
    stdWrap.typolink.parameter = 1
    #stdWrap.typolink.ATagParams = class=""
    params = class="img-responsive logo"
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
  }
}
# Studio
[PIDinRootline = 3]
lib.logo {
  10 {
    file = {$template_path}/Resources/Public/img/studios-logo.png
    stdWrap.typolink.parameter = 3
  }
}

# Cinemas
[PIDinRootline = 4]
lib.logo {
  10 {
    file = {$template_path}/Resources/Public/img/cinemas-logo.png
    stdWrap.typolink.parameter = 4
  }
}
lib.asideLinks >
lib.asideLinks = CONTENT
lib.asideLinks {
  table = tt_content
  select {
    pidInList = 109
    orderBy = sorting
  }
}

# Cinemas Equimpent
[PIDinRootline = 16]
lib.equipmentMenu = HMENU
lib.equipmentMenu.special = directory
lib.equipmentMenu.special.value = 16
lib.equipmentMenu {
  #excludeUidList = {$page.menu.equipmentMenu}
   1 = TMENU
   1 {
     expAll = 1
      wrap = <div class="container"><ul class="cinemas-nav">|</ul></div>
      NO.wrapItemAndSub = <li>|</li>
      ACT = 1
      ACT.wrapItemAndSub = <li class="current">|</li>
   }
}

# Reasearch
[PIDinRootline = 5]
lib.logo {
  10 {
    file = {$template_path}/Resources/Public/img/research-logo.png
    stdWrap.typolink.parameter = 5
  }
}
lib.asideLinks >
lib.asideLinks = CONTENT
lib.asideLinks {
  table = tt_content
  select {
    pidInList = 75
    orderBy = sorting
  }
}

# Emotion
[PIDinRootline = 6]
lib.logo {
  10 {
    file = {$template_path}/Resources/Public/img/emotion-logo.png
    stdWrap.typolink.parameter = 6
  }
}

# Emotion Catalog
[PIDinRootline = 30]
lib.emotionCatalogMenu >
lib.emotionCatalogMenu = HMENU
lib.emotionCatalogMenu.special = directory
lib.emotionCatalogMenu.special.value = 30
lib.emotionCatalogMenu {
  #excludeUidList = {$page.menu.equipmentMenu}
   1 = TMENU
   1 {
     expAll = 1
      wrap = <div class="container"><ul class="emotion-films-nav">|</ul></div>
      NO.wrapItemAndSub = <li>|</li>
      ACT = 1
      ACT.wrapItemAndSub = <li class="current">|</li>
   }
}

[global]

lib.footerLinks >
lib.footerLinks = CONTENT
lib.footerLinks {
  table = tt_content
  select {
    pidInList = 64
    orderBy = sorting
  }
}

lib.footerContacts >
lib.footerContacts = CONTENT
lib.footerContacts {
  table = tt_content
  select {
    pidInList = 65
    orderBy = sorting
  }
}

lib.footerPhones >
lib.footerPhones = CONTENT
lib.footerPhones {
  table = tt_content
  select {
    pidInList = 66
    orderBy = sorting
  }
}

lib.studiosContacts >
lib.studiosContacts = CONTENT
lib.studiosContacts {
  table = tt_content
  select {
    pidInList = 98
    orderBy = sorting
  }
}

lib.prodctDetailContacts >
lib.prodctDetailContacts = CONTENT
lib.prodctDetailContacts {
  table = tt_content
  select {
    pidInList = 111
    orderBy = sorting
  }
}


/*
lib.departamentsNews >
lib.departamentsNews = CONTENT
lib.departamentsNews {
  table = tt_content
  select {
    pidInList = 67
    orderBy = sorting
    max = 999
  }
}
*/

lib.departamentsNews >
lib.departamentsNews = RECORDS
lib.departamentsNews {
  wrap = |
  source = 63,67,70,73
  dontCheckPid = 1
  tables = tt_content  
}
