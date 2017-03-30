 tt_content.gridelements_pi1.20.10.setup {
  # Standrad container 
  1 < lib.gridelements.defaultGridSetup
  1 {
    wrap = <div class="container">|</div>
    innerWrap = <section class="hot-spots">|</section>
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = <div class="col-md-3 hot-spots_item">|</div>
        innerWrap =  |
      }
    } # end column 1
    
    columns {
      # colPos ID
      1 < .default
      1 {
        wrap = <div class="col-md-3 hot-spots_item">|</div>
        innerWrap =  |
      }
    } # end column 2
    
    columns {
      # colPos ID
      2 < .default
      2 {
        wrap = <div class="col-md-3 hot-spots_item">|</div>
        innerWrap =  |
      }
    } # end column 3
    
    columns {
      # colPos ID
      3 < .default
      3 {
        wrap = <div class="col-md-3 hot-spots_item">|</div>
        innerWrap =  |
      }
    } # end column 4           
  } # end grid 1 


  # New departament container 
  2 < lib.gridelements.defaultGridSetup
  2 {
    wrap = <div class="news-content_department">|</div>
    innerWrap = |
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = |
        innerWrap =  |
      }
    } # end column 1          
  } # end grid 2

  # Fluid-Template grid
  # GRID_ID ist die ID des entsprechenden Gridelements
  3 < lib.gridelements.defaultGridSetup
  3 {
    cObject = FLUIDTEMPLATE
    cObject {
      file = typo3conf/ext/nevafilm_site/Resources/Private/Extensions/gridelements/SectionGridService.html
    }
  } # end grid 3

  # Standrad container 
  4 < lib.gridelements.defaultGridSetup
  4 {
    wrap = <div class="container">|</div>
    innerWrap = |
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = |
        innerWrap =  |
      }
    } # end column 1          
  } # end grid 4

 
}

