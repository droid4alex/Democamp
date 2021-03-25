import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div id="main-content" className="loading__hide  u-hide-focus" data-appearing-on="" data-bucket-url="" data-bucket-id="" tabIndex="-1">
        <section className="project-index__section project-index__section--projects " data-role="project_group content_filter_group" data-projects-display="card" role="region" aria-label="My Projects">
          <header className="centered">
            <h3 className="project-index__header break break--on-background push--top push_half--bottom">
              <span>Projects</span>
            </h3>
            <aside className="project-index__toolbar project-index__toolbar--new hide-from-clients" role="presentation" data-behavior="hide_when_content_filter_active">
              <span className="options-menu options-menu--add-project" data-purpose="topic" data-behavior="expandable render_new_project_form_on_expand reveal_on_expand">
                <button name="button" type="button" title="Start a new project…" className="options-menu__expansion-toggle btn btn--small btn--with-icon btn--add-icon" data-behavior="toggle_expansion_on_click">&nbsp; 	&nbsp; New</button>
                <div className="options-menu__content expanded_content" data-role="new_project_form_container revealable_content" data-behavior="collapse_on_clickoutside">
                </div>
              </span>
            </aside>
          </header>
          <div className="card-grid--projects" data-role="project_group_items">
            <span className="cards--bookmarked" data-role="bookmarked_projects_container grouped_projects_container" data-skip-dividers="true"><article id="bucket_20918070_card" className="card card--project card--project-topic card--playgrounded" data-role="project_group_item project_card content_filterable" data-sortable-name="Making a Podcast" data-sortable-group="M">
              <section className="card__slider" data-role="card_slider">
                <div className="card__slide card__slide-1" data-role="card_slide" data-step="1">
                  <a className="card__link" href="/projects/5">
                    <div className="card__content">
                      <section>
                        <div className="card__filterable-content">
                          <h2 className="card__title flush" title="" data-role="content_filter_text">Finish Phase 4 of MVP</h2>
                          <p className="card__description flush" title="" data-role="content_filter_text">HTML, CSS, UI and User tests</p>
                        </div>
                      </section>
                    </div>
                  </a>
                  <div className="card-settings " data-role="project_settings">
                    <button name="button" type="button" title="Unpin this project…" className="btn btn--small btn--small-icon btn--borderless u-hide-focus btn--pin-icon card__pin card__pin--unbookmark" data-url="/projects/5/edit" data-behavior="load_project_card_actions">Unpin</button>
                    <button name="button" type="button" title="Options for this project…" className="btn btn--small btn--small-icon btn--borderless u-hide-focus btn--overflow-icon-light card-settings__button" data-url="/projects/5/edit" data-behavior="load_project_card_actions">Options</button>
                  </div>
                </div>
                <div id="bucket_20918070_card_actions" className="card__slide card__slide-2" data-step="2" data-role="card_slide">
                </div>

                <div id="bucket_20918070_card_edit" className="card__slide card__slide-3" data-step="3" data-role="card_slide project_card_edit">
                </div>
              </section>
            </article>
            </span>
            <span className="cards--unbookmarked" data-role="unbookmarked_projects_container grouped_projects_container" data-skip-dividers="true">
            </span>
          </div>
        </section>
      </div>
    )
  }
}

export default Projects;