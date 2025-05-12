'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-basic documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-9dcef19b36b03d1e10e70dbcb20f880bf9399086f1516e8f466db2fac6ac6696419a1a82b0ee2b350eecaf57ad6a9c2c2da33f9f612ce3497a2557609ebe5156"' : 'data-bs-target="#xs-controllers-links-module-AppModule-9dcef19b36b03d1e10e70dbcb20f880bf9399086f1516e8f466db2fac6ac6696419a1a82b0ee2b350eecaf57ad6a9c2c2da33f9f612ce3497a2557609ebe5156"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9dcef19b36b03d1e10e70dbcb20f880bf9399086f1516e8f466db2fac6ac6696419a1a82b0ee2b350eecaf57ad6a9c2c2da33f9f612ce3497a2557609ebe5156"' :
                                            'id="xs-controllers-links-module-AppModule-9dcef19b36b03d1e10e70dbcb20f880bf9399086f1516e8f466db2fac6ac6696419a1a82b0ee2b350eecaf57ad6a9c2c2da33f9f612ce3497a2557609ebe5156"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-9dcef19b36b03d1e10e70dbcb20f880bf9399086f1516e8f466db2fac6ac6696419a1a82b0ee2b350eecaf57ad6a9c2c2da33f9f612ce3497a2557609ebe5156"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9dcef19b36b03d1e10e70dbcb20f880bf9399086f1516e8f466db2fac6ac6696419a1a82b0ee2b350eecaf57ad6a9c2c2da33f9f612ce3497a2557609ebe5156"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9dcef19b36b03d1e10e70dbcb20f880bf9399086f1516e8f466db2fac6ac6696419a1a82b0ee2b350eecaf57ad6a9c2c2da33f9f612ce3497a2557609ebe5156"' :
                                        'id="xs-injectables-links-module-AppModule-9dcef19b36b03d1e10e70dbcb20f880bf9399086f1516e8f466db2fac6ac6696419a1a82b0ee2b350eecaf57ad6a9c2c2da33f9f612ce3497a2557609ebe5156"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-690bcf56107b3b7b2f3703b0412950742d2202afe40c8b6eabaaa938b912581f5ff58bfb99d777b0628c389ad604c86ca1a7f1c010eb92959d46ec220ffb6536"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-690bcf56107b3b7b2f3703b0412950742d2202afe40c8b6eabaaa938b912581f5ff58bfb99d777b0628c389ad604c86ca1a7f1c010eb92959d46ec220ffb6536"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-690bcf56107b3b7b2f3703b0412950742d2202afe40c8b6eabaaa938b912581f5ff58bfb99d777b0628c389ad604c86ca1a7f1c010eb92959d46ec220ffb6536"' :
                                            'id="xs-controllers-links-module-AuthModule-690bcf56107b3b7b2f3703b0412950742d2202afe40c8b6eabaaa938b912581f5ff58bfb99d777b0628c389ad604c86ca1a7f1c010eb92959d46ec220ffb6536"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-690bcf56107b3b7b2f3703b0412950742d2202afe40c8b6eabaaa938b912581f5ff58bfb99d777b0628c389ad604c86ca1a7f1c010eb92959d46ec220ffb6536"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-690bcf56107b3b7b2f3703b0412950742d2202afe40c8b6eabaaa938b912581f5ff58bfb99d777b0628c389ad604c86ca1a7f1c010eb92959d46ec220ffb6536"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-690bcf56107b3b7b2f3703b0412950742d2202afe40c8b6eabaaa938b912581f5ff58bfb99d777b0628c389ad604c86ca1a7f1c010eb92959d46ec220ffb6536"' :
                                        'id="xs-injectables-links-module-AuthModule-690bcf56107b3b7b2f3703b0412950742d2202afe40c8b6eabaaa938b912581f5ff58bfb99d777b0628c389ad604c86ca1a7f1c010eb92959d46ec220ffb6536"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-988d96ad6fd57c7cfe2cd46b1b9b08dc3e33190e168de418213ccba85581cc76827c3c603684369289285a64916f8f6414c0fba1dc28ddb681d8b444ad1737f5"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-988d96ad6fd57c7cfe2cd46b1b9b08dc3e33190e168de418213ccba85581cc76827c3c603684369289285a64916f8f6414c0fba1dc28ddb681d8b444ad1737f5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-988d96ad6fd57c7cfe2cd46b1b9b08dc3e33190e168de418213ccba85581cc76827c3c603684369289285a64916f8f6414c0fba1dc28ddb681d8b444ad1737f5"' :
                                            'id="xs-controllers-links-module-CompaniesModule-988d96ad6fd57c7cfe2cd46b1b9b08dc3e33190e168de418213ccba85581cc76827c3c603684369289285a64916f8f6414c0fba1dc28ddb681d8b444ad1737f5"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-988d96ad6fd57c7cfe2cd46b1b9b08dc3e33190e168de418213ccba85581cc76827c3c603684369289285a64916f8f6414c0fba1dc28ddb681d8b444ad1737f5"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-988d96ad6fd57c7cfe2cd46b1b9b08dc3e33190e168de418213ccba85581cc76827c3c603684369289285a64916f8f6414c0fba1dc28ddb681d8b444ad1737f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-988d96ad6fd57c7cfe2cd46b1b9b08dc3e33190e168de418213ccba85581cc76827c3c603684369289285a64916f8f6414c0fba1dc28ddb681d8b444ad1737f5"' :
                                        'id="xs-injectables-links-module-CompaniesModule-988d96ad6fd57c7cfe2cd46b1b9b08dc3e33190e168de418213ccba85581cc76827c3c603684369289285a64916f8f6414c0fba1dc28ddb681d8b444ad1737f5"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-2bcdc566ce147468bd9ac211a6dd267902aed610927f097b4a3e1189ff547e91c3d3e99e4657fb6cf1f176ceafa29a227d0193ce978f9e0e7246cd453dca404d"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-2bcdc566ce147468bd9ac211a6dd267902aed610927f097b4a3e1189ff547e91c3d3e99e4657fb6cf1f176ceafa29a227d0193ce978f9e0e7246cd453dca404d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-2bcdc566ce147468bd9ac211a6dd267902aed610927f097b4a3e1189ff547e91c3d3e99e4657fb6cf1f176ceafa29a227d0193ce978f9e0e7246cd453dca404d"' :
                                            'id="xs-controllers-links-module-DatabasesModule-2bcdc566ce147468bd9ac211a6dd267902aed610927f097b4a3e1189ff547e91c3d3e99e4657fb6cf1f176ceafa29a227d0193ce978f9e0e7246cd453dca404d"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-2bcdc566ce147468bd9ac211a6dd267902aed610927f097b4a3e1189ff547e91c3d3e99e4657fb6cf1f176ceafa29a227d0193ce978f9e0e7246cd453dca404d"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-2bcdc566ce147468bd9ac211a6dd267902aed610927f097b4a3e1189ff547e91c3d3e99e4657fb6cf1f176ceafa29a227d0193ce978f9e0e7246cd453dca404d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-2bcdc566ce147468bd9ac211a6dd267902aed610927f097b4a3e1189ff547e91c3d3e99e4657fb6cf1f176ceafa29a227d0193ce978f9e0e7246cd453dca404d"' :
                                        'id="xs-injectables-links-module-DatabasesModule-2bcdc566ce147468bd9ac211a6dd267902aed610927f097b4a3e1189ff547e91c3d3e99e4657fb6cf1f176ceafa29a227d0193ce978f9e0e7246cd453dca404d"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' :
                                            'id="xs-controllers-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' :
                                        'id="xs-injectables-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' :
                                            'id="xs-controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-c9a7940a731b7a9928783ff57ccbadd5d4116dc14a3c2936955dbf9386f6c7218ca66b11dea4d3eb8fd8fb5316fd1536d33d7b38c6448d7b09786441b4b6cb7f"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-c9a7940a731b7a9928783ff57ccbadd5d4116dc14a3c2936955dbf9386f6c7218ca66b11dea4d3eb8fd8fb5316fd1536d33d7b38c6448d7b09786441b4b6cb7f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-c9a7940a731b7a9928783ff57ccbadd5d4116dc14a3c2936955dbf9386f6c7218ca66b11dea4d3eb8fd8fb5316fd1536d33d7b38c6448d7b09786441b4b6cb7f"' :
                                            'id="xs-controllers-links-module-JobsModule-c9a7940a731b7a9928783ff57ccbadd5d4116dc14a3c2936955dbf9386f6c7218ca66b11dea4d3eb8fd8fb5316fd1536d33d7b38c6448d7b09786441b4b6cb7f"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-c9a7940a731b7a9928783ff57ccbadd5d4116dc14a3c2936955dbf9386f6c7218ca66b11dea4d3eb8fd8fb5316fd1536d33d7b38c6448d7b09786441b4b6cb7f"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-c9a7940a731b7a9928783ff57ccbadd5d4116dc14a3c2936955dbf9386f6c7218ca66b11dea4d3eb8fd8fb5316fd1536d33d7b38c6448d7b09786441b4b6cb7f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-c9a7940a731b7a9928783ff57ccbadd5d4116dc14a3c2936955dbf9386f6c7218ca66b11dea4d3eb8fd8fb5316fd1536d33d7b38c6448d7b09786441b4b6cb7f"' :
                                        'id="xs-injectables-links-module-JobsModule-c9a7940a731b7a9928783ff57ccbadd5d4116dc14a3c2936955dbf9386f6c7218ca66b11dea4d3eb8fd8fb5316fd1536d33d7b38c6448d7b09786441b4b6cb7f"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-80ba65d62c2281d4190ec665f060d982d8b87371881af5778504771c10fdfbb3abe75fb4c67fc92d34383e6a261004eb63e1a0134bd1e2f70926e7c649a0f2a5"' : 'data-bs-target="#xs-controllers-links-module-MailModule-80ba65d62c2281d4190ec665f060d982d8b87371881af5778504771c10fdfbb3abe75fb4c67fc92d34383e6a261004eb63e1a0134bd1e2f70926e7c649a0f2a5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-80ba65d62c2281d4190ec665f060d982d8b87371881af5778504771c10fdfbb3abe75fb4c67fc92d34383e6a261004eb63e1a0134bd1e2f70926e7c649a0f2a5"' :
                                            'id="xs-controllers-links-module-MailModule-80ba65d62c2281d4190ec665f060d982d8b87371881af5778504771c10fdfbb3abe75fb4c67fc92d34383e6a261004eb63e1a0134bd1e2f70926e7c649a0f2a5"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-80ba65d62c2281d4190ec665f060d982d8b87371881af5778504771c10fdfbb3abe75fb4c67fc92d34383e6a261004eb63e1a0134bd1e2f70926e7c649a0f2a5"' : 'data-bs-target="#xs-injectables-links-module-MailModule-80ba65d62c2281d4190ec665f060d982d8b87371881af5778504771c10fdfbb3abe75fb4c67fc92d34383e6a261004eb63e1a0134bd1e2f70926e7c649a0f2a5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-80ba65d62c2281d4190ec665f060d982d8b87371881af5778504771c10fdfbb3abe75fb4c67fc92d34383e6a261004eb63e1a0134bd1e2f70926e7c649a0f2a5"' :
                                        'id="xs-injectables-links-module-MailModule-80ba65d62c2281d4190ec665f060d982d8b87371881af5778504771c10fdfbb3abe75fb4c67fc92d34383e6a261004eb63e1a0134bd1e2f70926e7c649a0f2a5"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-6bc5fb06f440ed017e732701e41753e3f8744b3c9c1e0bff4bdb13a36c03887b3d1dc78e87bafaeb583585116c6e9b77dd2413cfb147787c28a9c4e0b530eaf2"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-6bc5fb06f440ed017e732701e41753e3f8744b3c9c1e0bff4bdb13a36c03887b3d1dc78e87bafaeb583585116c6e9b77dd2413cfb147787c28a9c4e0b530eaf2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-6bc5fb06f440ed017e732701e41753e3f8744b3c9c1e0bff4bdb13a36c03887b3d1dc78e87bafaeb583585116c6e9b77dd2413cfb147787c28a9c4e0b530eaf2"' :
                                            'id="xs-controllers-links-module-PermissionsModule-6bc5fb06f440ed017e732701e41753e3f8744b3c9c1e0bff4bdb13a36c03887b3d1dc78e87bafaeb583585116c6e9b77dd2413cfb147787c28a9c4e0b530eaf2"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-6bc5fb06f440ed017e732701e41753e3f8744b3c9c1e0bff4bdb13a36c03887b3d1dc78e87bafaeb583585116c6e9b77dd2413cfb147787c28a9c4e0b530eaf2"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-6bc5fb06f440ed017e732701e41753e3f8744b3c9c1e0bff4bdb13a36c03887b3d1dc78e87bafaeb583585116c6e9b77dd2413cfb147787c28a9c4e0b530eaf2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-6bc5fb06f440ed017e732701e41753e3f8744b3c9c1e0bff4bdb13a36c03887b3d1dc78e87bafaeb583585116c6e9b77dd2413cfb147787c28a9c4e0b530eaf2"' :
                                        'id="xs-injectables-links-module-PermissionsModule-6bc5fb06f440ed017e732701e41753e3f8744b3c9c1e0bff4bdb13a36c03887b3d1dc78e87bafaeb583585116c6e9b77dd2413cfb147787c28a9c4e0b530eaf2"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-f414701fdfa990fd08cb3b49839ee4f65bb7a2b9328de2206e067886b0f33805f4c9b9ebdc363d2c2ddf02641a3cfe96f769df30b6f62d7a37903da513413d4e"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-f414701fdfa990fd08cb3b49839ee4f65bb7a2b9328de2206e067886b0f33805f4c9b9ebdc363d2c2ddf02641a3cfe96f769df30b6f62d7a37903da513413d4e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-f414701fdfa990fd08cb3b49839ee4f65bb7a2b9328de2206e067886b0f33805f4c9b9ebdc363d2c2ddf02641a3cfe96f769df30b6f62d7a37903da513413d4e"' :
                                            'id="xs-controllers-links-module-ResumesModule-f414701fdfa990fd08cb3b49839ee4f65bb7a2b9328de2206e067886b0f33805f4c9b9ebdc363d2c2ddf02641a3cfe96f769df30b6f62d7a37903da513413d4e"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-f414701fdfa990fd08cb3b49839ee4f65bb7a2b9328de2206e067886b0f33805f4c9b9ebdc363d2c2ddf02641a3cfe96f769df30b6f62d7a37903da513413d4e"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-f414701fdfa990fd08cb3b49839ee4f65bb7a2b9328de2206e067886b0f33805f4c9b9ebdc363d2c2ddf02641a3cfe96f769df30b6f62d7a37903da513413d4e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-f414701fdfa990fd08cb3b49839ee4f65bb7a2b9328de2206e067886b0f33805f4c9b9ebdc363d2c2ddf02641a3cfe96f769df30b6f62d7a37903da513413d4e"' :
                                        'id="xs-injectables-links-module-ResumesModule-f414701fdfa990fd08cb3b49839ee4f65bb7a2b9328de2206e067886b0f33805f4c9b9ebdc363d2c2ddf02641a3cfe96f769df30b6f62d7a37903da513413d4e"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-ef036c92a2f3d598dfaa3702df11d8a045d35671176fcca4f73738d2f9cd177e6cb77e0d43a0ffc203d6f3a8ea3ee34e4362ebd2442204d8e2af4be0f3d67ba5"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-ef036c92a2f3d598dfaa3702df11d8a045d35671176fcca4f73738d2f9cd177e6cb77e0d43a0ffc203d6f3a8ea3ee34e4362ebd2442204d8e2af4be0f3d67ba5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-ef036c92a2f3d598dfaa3702df11d8a045d35671176fcca4f73738d2f9cd177e6cb77e0d43a0ffc203d6f3a8ea3ee34e4362ebd2442204d8e2af4be0f3d67ba5"' :
                                            'id="xs-controllers-links-module-RolesModule-ef036c92a2f3d598dfaa3702df11d8a045d35671176fcca4f73738d2f9cd177e6cb77e0d43a0ffc203d6f3a8ea3ee34e4362ebd2442204d8e2af4be0f3d67ba5"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-ef036c92a2f3d598dfaa3702df11d8a045d35671176fcca4f73738d2f9cd177e6cb77e0d43a0ffc203d6f3a8ea3ee34e4362ebd2442204d8e2af4be0f3d67ba5"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-ef036c92a2f3d598dfaa3702df11d8a045d35671176fcca4f73738d2f9cd177e6cb77e0d43a0ffc203d6f3a8ea3ee34e4362ebd2442204d8e2af4be0f3d67ba5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-ef036c92a2f3d598dfaa3702df11d8a045d35671176fcca4f73738d2f9cd177e6cb77e0d43a0ffc203d6f3a8ea3ee34e4362ebd2442204d8e2af4be0f3d67ba5"' :
                                        'id="xs-injectables-links-module-RolesModule-ef036c92a2f3d598dfaa3702df11d8a045d35671176fcca4f73738d2f9cd177e6cb77e0d43a0ffc203d6f3a8ea3ee34e4362ebd2442204d8e2af4be0f3d67ba5"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatefulModule.html" data-type="entity-link" >StatefulModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StatefulModule-ab33c20afeb0eef6d4ada9343ba454bfcac158e950e2c59533de3dd3985faa5e5743d0c569414632c3a97b09ab744441367c2770b32d3d39d92b856d880f4878"' : 'data-bs-target="#xs-controllers-links-module-StatefulModule-ab33c20afeb0eef6d4ada9343ba454bfcac158e950e2c59533de3dd3985faa5e5743d0c569414632c3a97b09ab744441367c2770b32d3d39d92b856d880f4878"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StatefulModule-ab33c20afeb0eef6d4ada9343ba454bfcac158e950e2c59533de3dd3985faa5e5743d0c569414632c3a97b09ab744441367c2770b32d3d39d92b856d880f4878"' :
                                            'id="xs-controllers-links-module-StatefulModule-ab33c20afeb0eef6d4ada9343ba454bfcac158e950e2c59533de3dd3985faa5e5743d0c569414632c3a97b09ab744441367c2770b32d3d39d92b856d880f4878"' }>
                                            <li class="link">
                                                <a href="controllers/StatefulController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatefulController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StatefulModule-ab33c20afeb0eef6d4ada9343ba454bfcac158e950e2c59533de3dd3985faa5e5743d0c569414632c3a97b09ab744441367c2770b32d3d39d92b856d880f4878"' : 'data-bs-target="#xs-injectables-links-module-StatefulModule-ab33c20afeb0eef6d4ada9343ba454bfcac158e950e2c59533de3dd3985faa5e5743d0c569414632c3a97b09ab744441367c2770b32d3d39d92b856d880f4878"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StatefulModule-ab33c20afeb0eef6d4ada9343ba454bfcac158e950e2c59533de3dd3985faa5e5743d0c569414632c3a97b09ab744441367c2770b32d3d39d92b856d880f4878"' :
                                        'id="xs-injectables-links-module-StatefulModule-ab33c20afeb0eef6d4ada9343ba454bfcac158e950e2c59533de3dd3985faa5e5743d0c569414632c3a97b09ab744441367c2770b32d3d39d92b856d880f4878"' }>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionSerializer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionSerializer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StatefulService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatefulService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatelessModule.html" data-type="entity-link" >StatelessModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StatelessModule-a7e8334e8f0d411036dbd62ad437c36cebe47840f7539b8f7dcce32949509336c1b74d5b1a67e56e5da418b29396793fc2d4deaba4b22e69d04ed1fa483f026c"' : 'data-bs-target="#xs-controllers-links-module-StatelessModule-a7e8334e8f0d411036dbd62ad437c36cebe47840f7539b8f7dcce32949509336c1b74d5b1a67e56e5da418b29396793fc2d4deaba4b22e69d04ed1fa483f026c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StatelessModule-a7e8334e8f0d411036dbd62ad437c36cebe47840f7539b8f7dcce32949509336c1b74d5b1a67e56e5da418b29396793fc2d4deaba4b22e69d04ed1fa483f026c"' :
                                            'id="xs-controllers-links-module-StatelessModule-a7e8334e8f0d411036dbd62ad437c36cebe47840f7539b8f7dcce32949509336c1b74d5b1a67e56e5da418b29396793fc2d4deaba4b22e69d04ed1fa483f026c"' }>
                                            <li class="link">
                                                <a href="controllers/StatelessController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatelessController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StatelessModule-a7e8334e8f0d411036dbd62ad437c36cebe47840f7539b8f7dcce32949509336c1b74d5b1a67e56e5da418b29396793fc2d4deaba4b22e69d04ed1fa483f026c"' : 'data-bs-target="#xs-injectables-links-module-StatelessModule-a7e8334e8f0d411036dbd62ad437c36cebe47840f7539b8f7dcce32949509336c1b74d5b1a67e56e5da418b29396793fc2d4deaba4b22e69d04ed1fa483f026c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StatelessModule-a7e8334e8f0d411036dbd62ad437c36cebe47840f7539b8f7dcce32949509336c1b74d5b1a67e56e5da418b29396793fc2d4deaba4b22e69d04ed1fa483f026c"' :
                                        'id="xs-injectables-links-module-StatelessModule-a7e8334e8f0d411036dbd62ad437c36cebe47840f7539b8f7dcce32949509336c1b74d5b1a67e56e5da418b29396793fc2d4deaba4b22e69d04ed1fa483f026c"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StatelessService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatelessService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-30dee51074bfaf44234be041f20e1685494466f9da4e96d5d4b03363828bd75964b2c0977520cce262e3bcf6f9b8bdb71cd82d93ad3841463a5f9c37df9d29bd"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-30dee51074bfaf44234be041f20e1685494466f9da4e96d5d4b03363828bd75964b2c0977520cce262e3bcf6f9b8bdb71cd82d93ad3841463a5f9c37df9d29bd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-30dee51074bfaf44234be041f20e1685494466f9da4e96d5d4b03363828bd75964b2c0977520cce262e3bcf6f9b8bdb71cd82d93ad3841463a5f9c37df9d29bd"' :
                                            'id="xs-controllers-links-module-SubscribersModule-30dee51074bfaf44234be041f20e1685494466f9da4e96d5d4b03363828bd75964b2c0977520cce262e3bcf6f9b8bdb71cd82d93ad3841463a5f9c37df9d29bd"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-30dee51074bfaf44234be041f20e1685494466f9da4e96d5d4b03363828bd75964b2c0977520cce262e3bcf6f9b8bdb71cd82d93ad3841463a5f9c37df9d29bd"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-30dee51074bfaf44234be041f20e1685494466f9da4e96d5d4b03363828bd75964b2c0977520cce262e3bcf6f9b8bdb71cd82d93ad3841463a5f9c37df9d29bd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-30dee51074bfaf44234be041f20e1685494466f9da4e96d5d4b03363828bd75964b2c0977520cce262e3bcf6f9b8bdb71cd82d93ad3841463a5f9c37df9d29bd"' :
                                        'id="xs-injectables-links-module-SubscribersModule-30dee51074bfaf44234be041f20e1685494466f9da4e96d5d4b03363828bd75964b2c0977520cce262e3bcf6f9b8bdb71cd82d93ad3841463a5f9c37df9d29bd"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-5fdf07c4ed1d3906fc9153746657618bcb395d29286c191d3a771c23292b56e331ec6bea3bb6508a9fd86b08ce0d4e2334603d5b3b5667bff7d1eaebe746ffa8"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-5fdf07c4ed1d3906fc9153746657618bcb395d29286c191d3a771c23292b56e331ec6bea3bb6508a9fd86b08ce0d4e2334603d5b3b5667bff7d1eaebe746ffa8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-5fdf07c4ed1d3906fc9153746657618bcb395d29286c191d3a771c23292b56e331ec6bea3bb6508a9fd86b08ce0d4e2334603d5b3b5667bff7d1eaebe746ffa8"' :
                                            'id="xs-controllers-links-module-UsersModule-5fdf07c4ed1d3906fc9153746657618bcb395d29286c191d3a771c23292b56e331ec6bea3bb6508a9fd86b08ce0d4e2334603d5b3b5667bff7d1eaebe746ffa8"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-5fdf07c4ed1d3906fc9153746657618bcb395d29286c191d3a771c23292b56e331ec6bea3bb6508a9fd86b08ce0d4e2334603d5b3b5667bff7d1eaebe746ffa8"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-5fdf07c4ed1d3906fc9153746657618bcb395d29286c191d3a771c23292b56e331ec6bea3bb6508a9fd86b08ce0d4e2334603d5b3b5667bff7d1eaebe746ffa8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-5fdf07c4ed1d3906fc9153746657618bcb395d29286c191d3a771c23292b56e331ec6bea3bb6508a9fd86b08ce0d4e2334603d5b3b5667bff7d1eaebe746ffa8"' :
                                        'id="xs-injectables-links-module-UsersModule-5fdf07c4ed1d3906fc9153746657618bcb395d29286c191d3a771c23292b56e331ec6bea3bb6508a9fd86b08ce0d4e2334603d5b3b5667bff7d1eaebe746ffa8"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StatefulController.html" data-type="entity-link" >StatefulController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StatelessController.html" data-type="entity-link" >StatelessController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCvDto.html" data-type="entity-link" >CreateUserCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoryDto.html" data-type="entity-link" >HistoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Jobs.html" data-type="entity-link" >Jobs</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedByDto.html" data-type="entity-link" >UpdatedByDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard-1.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy-1.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard-1.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard-2.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy-1.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy-2.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionSerializer.html" data-type="entity-link" >SessionSerializer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatefulService.html" data-type="entity-link" >StatefulService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatelessService.html" data-type="entity-link" >StatelessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticatedGuard.html" data-type="entity-link" >AuthenticatedGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});