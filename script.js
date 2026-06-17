// BIOVinkje — satirische BIO2-excuusgenerator. 100% client-side.
// Data uit BIO2.csv (kolommen: O-maatregel-nummer ; Overheidsmaatregel),
// hier hardcoded ingebakken. Excuses worden gegenereerd, niet opgeslagen.

const CONTROLS = [{"id": "5.01.01","cat": "5","text": "De entiteit heeft een informatiebeveiligingsbeleid opgesteld en vastgesteld door het bestuur van de entiteit. Dit beleid bevat ten minste de volgende punten: • De strategische uitgangspunten en randvoorwaarden die de entiteit hanteert voor informatiebeveiliging en in het bijzonder de inbedding in en afstemming op het algemene beveiligingsbeleid en het informatievoorzieningsbeleid. • De organisatie van de informatiebeveiligingsfunctie, waaronder verantwoordelijkheden, taken en bevoegdheden. • De toewijzing van de verantwoordelijkheden en samenhang van informatiebeveiliging voor ketens van informatiesystemen, de beveiliging van OT, privacybescherming en de verantwoordelijkheden voor de continuïteit van de taakuitvoering van entiteit (BCM) aan lijnmanagers. • De gemeenschappelijke betrouwbaarheidseisen en normen die op de entiteit van toepassing zijn. • De frequentie waarmee het informatiebeveiligingsbeleid wordt geëvalueerd. • De bevordering van het beveiligingsbewustzijn."},{"id": "5.01.02","cat": "5","text": "Het informatiebeveiligingsbeleid wordt minimaal jaarlijks en in aansluiting bij de bestuurs- en Planning & Control (P&C)-cycli en externe ontwikkelingen beoordeeld en zo nodig bijgesteld."},{"id": "5.02.01","cat": "5","text": "Het bestuur van de entiteit heeft vastgelegd en vastgesteld: • wat de verantwoordelijkheden en rollen zijn voor informatiebeveiliging, privacybescherming, operationele technologie (OT), bedrijfscontinuïteitsmanagement (BCM) binnen haar entiteit; • de samenhang voor informatiebeveiliging, de beveiliging van OT, de continuïteit van de taakuitvoering en BCM van de entiteit. Bij het definiëren en toewijzen van rollen en verantwoordelijkheden is specifieke aandacht voor het adequaat afhandelen van incidenten. Lijnmanagers en proceseigenaren die verantwoordelijk zijn voor bedrijfsmiddelen zijn ook verantwoordelijk voor de behandeling van risico’s die op die bedrijfsmiddelen van toepassing zijn."},{"id": "5.02.02","cat": "5","text": "Er is een CISO aangesteld die bevoegd is om onafhankelijk en zelfstandig te adviseren en te rapporteren aan het bestuur en of het controlerend orgaan over informatiebeveiliging."},{"id": "5.03.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.04.01","cat": "5","text": "Het bestuur en de werknemers volgen regelmatig scholing, om cyberbeveiligingsrisico’s te herkennen en te voorkomen en te weten wat men moet doen als er een informatiebeveiligingsincident is. Daarbij tonen bestuurders aan dat zij voldoende kennis en vaardigheden hebben om de gevolgen van informatiebeveiligingsrisico’s te beoordelen op de diensten en/of producten die de entiteit levert."},{"id": "5.04.02","cat": "5","text": "Verplaatst naar 5.10.02."},{"id": "5.04.03","cat": "5","text": "Verplaatst naar 5.10.03."},{"id": "5.05.01","cat": "5","text": "De entiteit heeft uitgewerkt welke functionarissen met welke (overheids)instanties en toezichthouders formele contacten hebben over informatiebeveiliging. Dit overzicht wordt ten minste jaarlijks geactualiseerd."},{"id": "5.06.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.07.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.08.01","cat": "5","text": "Bij nieuwe informatiesystemen en bij significante wijzigingen op bestaande informatiesystemen wordt een expliciete risicoafweging op basis van de door de organisatie vastgestelde risicomanagementmethodiek worden uitgevoerd, om risico’s te identificeren en in voldoende mate te beheersen en ook voor het vaststellen van de beveiligingseisen."},{"id": "5.09.01","cat": "5","text": "Er is een inventaris van bedrijfsmiddelen die van belang zijn voor informatieverwerking, met inbegrip van OT. De inventaris omvat alle eigenschappen die nodig zijn voor het beheer en onderhoud. In de inventaris zijn ook opgenomen: bedrijfsmiddelen op afstand, cloud-omgevingen en bedrijfsmiddelen die regelmatig zijn verbonden met de netwerkinfrastructuur maar niet onder controle van de entiteit staan. De volledigheid en actualiteit van de inventaris wordt periodiek gecontroleerd met tussenpozen die passend zijn voor de frequentie waarmee wijzigingen optreden."},{"id": "5.10.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.10.02","cat": "5","text": "De gedragsregels voor het gebruik van bedrijfsmiddelen zijn voor extern personeel en vrijwilligers in het contract vastgelegd volgens de huisregels of interne gedragsregels."},{"id": "5.10.03","cat": "5","text": "Alle medewerkers zijn aantoonbaar gewezen op de gedragsregels voor het gebruik van bedrijfsmiddelen."},{"id": "5.11.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.12.01","cat": "5","text": "Informatie in alle informatiesystemen wordt met een expliciete risicoafweging geclassificeerd. Hierbij wordt gebruik gemaakt van een vastgestelde impactclassificatiemethodiek die onderdeel is van de vastgestelde risicomanagementmethodiek."},{"id": "5.13.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.14.01","cat": "5","text": "Internetfacing-informatiesystemen en e-mailberichtenverkeer blijven voldoen aan de verplichte beveiligingsstandaarden, zie hiervoor de website van het Forum Standaardisatie en het Cyberbeveiligingsbesluit. Hierop wordt gestuurd met de metingen van internet.nl. Daarbij dienen alle onderdelen te worden ingesteld zodat een optimale beveiliging wordt bereikt zonder afbreuk te doen aan de functionaliteit van de geboden dienst."},{"id": "5.14.02","cat": "5","text": "De entiteit maakt bij openbaar webverkeer van gevoelige gegevens gebruik van ten minste publiek vertrouwde Organization Validated (OV)-certificaten. De entiteit maakt bij intern webverkeer voor gevoelige gegevens gebruik van ten minste publieke vertrouwde OV-certificaten of private PKIo-certificaten. Hogere eisen aan certificaten vloeien voort uit een risicoanalyse, aansluitvoorwaarden of wetgeving."},{"id": "5.14.03","cat": "5","text": "Geavanceerde en/of gekwalificeerde elektronische handtekeningen voldoen aan de Advanced Electronic Signatures (AdES Baseline Profiles), zoals opgenomen in de Lijst open standaarden van Forum Standaardisatie."},{"id": "5.14.04","cat": "5","text": "Van alle internetfacing-informatiesystemen, webapplicaties, IP-adressen en API’s is er een actuele registratie."},{"id": "5.14.05","cat": "5","text": "Publiek toegankelijke websites worden bekend gemaakt via het Register Internetdomeinen Overheid (RIO). Deze informatie wordt ten minste iedere zes maanden geactualiseerd."},{"id": "5.15.01","cat": "5","text": "Toegang tot een vertrouwde zone is toegestaan in twee situaties: 1. vanaf geauthentiseerde apparatuur of; 2. vanuit programmatuur die draait binnen een veilige schil."},{"id": "5.16.01","cat": "5","text": "Er is een sluitende formele registratie- en afmeldprocedure voor het beheren van gebruikersidentificaties."},{"id": "5.16.02","cat": "5","text": "Het gebruiken van groepsaccounts is niet toegestaan, tenzij de proceseigenaar dit motiveert, vastlegt en afstemt met de CISO."},{"id": "5.17.01","cat": "5","text": "De entiteit past multi-factorauthenticatie (MFA) ten minste toe voor het primaire aanloggen op de digitale werkomgeving, bij accounts voor via het internet bereikbare voorzieningen en accounts die beheerrechten hebben en in andere situaties waar uit de risicoanalyse blijkt dat dit een passende oplossing is. De entiteit past MFA toe in deze twee vormen: 1. Wachtwoordloze toegang, zoals een pincode in combinatie met een hardware token of persoonlijk uniek certificaat (passkey). 2. Wachtwoordtoegang in combinatie met minimaal een tweede factor. Indien MFA niet mogelijk is voor deze accounts, worden andere mitigerende maatregelen genomen. Bij het nemen van mitigerende maatregelen wordt de CISO betrokken. De proceseigenaar keurt de mitigerende maatregelen goed. Waar mogelijk en veilig wordt MFA met federatieve authenticatievoorzieningen zoals Single Sign On en een Stepping Stone-oplossing worden gecombineerd toegepast. Voor beheer en monitoring van authenticatiegegevens: • wordt authenticatie-informatie uitgegeven met formele vastgestelde procedures, nadat de identiteit van de gebruiker met voldoende zekerheid is vastgesteld; • worden Use Cases voor misbruik van authenticatiegegevens gedefinieerd, worden deze gemonitord en wordt passende actie ondernomen bij het optreden ervan. Deze Use Cases omvatten in ieder geval inlogpogingen van ongebruikelijke plekken en pieken in mislukte inlogpogingen."},{"id": "5.17.02","cat": "5","text": "De entiteit biedt aan alle medewerkers een wachtwoordmanager of vergelijkbare oplossing aan."},{"id": "5.17.03","cat": "5","text": "De eisen aan wachtwoorden worden geautomatiseerd afgedwongen."},{"id": "5.18.01","cat": "5","text": "Het maken en aanpassen van accounts met bijzondere rechten wordt gemonitord. Indien deze wijzigingen ongeautoriseerd zijn, is dit een informatiebeveiligingsincident en wordt dat als zodanig vastgelegd en afgehandeld."},{"id": "5.18.02","cat": "5","text": "Alle uitgegeven toegangsrechten worden minimaal eenmaal per jaar beoordeeld. Een risicoafweging bepaalt of dit sneller moet."},{"id": "5.19.01","cat": "5","text": "Bij offerteaanvragen waar informatie(voorziening) een rol speelt, zijn informatiebeveiligingseisen waaronder de beschikbaarheid, integriteit en vertrouwelijkheid, onderdeel van het hele pakket aan inkoopeisen. De informatiebeveiligingseisen zijn gebaseerd op een expliciete risicoafweging."},{"id": "5.20.01","cat": "5","text": "De beveiligingseisen uit de offerteaanvraag worden expliciet opgenomen in (inkoop)contracten waar de verwerking van informatie een rol speelt."},{"id": "5.20.02","cat": "5","text": "Waar mogelijk worden algemene voorwaarden van leveranciers expliciet uitgesloten en worden eventueel aanvullende voorwaarden opgenomen. Als uitsluiten niet mogelijk is, worden risico’s beoordeeld. Expliciet is gemaakt welke consequenties geaccepteerd worden, welke gemitigeerd zijn en welke voorwaarden niet of nooit geaccepteerd worden bij het aangaan van de overeenkomst."},{"id": "5.20.03","cat": "5","text": "In het inkoopcontract wordt opgenomen dat de leverancier aantoont dat hij aan alle gestelde eisen voldoet in opzet, bestaan en werking, op basis van onderzoeken van onafhankelijke derden. Deze onderzoeken hebben een scope die dekkend is voor de gecontracteerde dienstverlening. Hierbij is expliciet aandacht voor de toeleveringsketen en hoe de leverancier zijn leveranciersmanagement ingeregeld heeft, zie overheidsmaatregel 5.21.01. Dit toont de leverancier jaarlijks opnieuw aan."},{"id": "5.20.04","cat": "5","text": "De entiteit voert zelfstandig onderzoek uit, ook ter validatie van de rapportages die de leverancier aanlevert. Om dit mogelijk te maken, wordt expliciet opgenomen dat er een mogelijkheid is voor een externe audit. Indien uit het voorgaande restrisico’s volgen, beheerst de entiteit deze door het toepassen van zijn vastgestelde risicomanagementmethodiek."},{"id": "5.20.05","cat": "5","text": "Onderdeel van de afspraken is dat de leverancier transparant is over kwetsbaarheden in de dienstverlening en informatiebeveiligingsincidenten waaronder datalekken. Dit stelt de entiteit in staat om passend te reageren onder meer door te rapporteren en mitigerende maatregelen te nemen."},{"id": "5.20.06","cat": "5","text": "Voordat een contract wordt afgesloten, wordt in een risicoafweging bepaald of de afhankelijkheid van een leverancier beheersbaar is. Een vast onderdeel van het contract is een expliciete uitwerking van de exit-strategie."},{"id": "5.21.02","cat": "5","text": "Voorafgaand aan het afsluiten van de overeenkomst geeft de leverancier inzicht in de keten van toeleveranciers en eventuele risico’s daarin. De entiteit beoordeelt of de risico’s acceptabel zijn."},{"id": "5.21.03","cat": "5","text": "De entiteit borgt dat de beveiligingseisen aan de leverancier onverminderd van toepassing zijn op de keten van toeleveranciers, tenzij die eisen niet relevant zijn gezien de aard van de dienstverlening door de toeleverancier. Indien informatiebeveiligingseisen zijn uitgesloten, maakt de leverancier dat inzichtelijk, inclusief een onderbouwing."},{"id": "5.21.04","cat": "5","text": "Gedurende de looptijd geeft de leverancier veranderingen in de keten van toeleveranciers door, inclusief risico’s daarin. Dit omvat minimaal kwetsbaarheden en informatiebeveiligingsincidenten die de dienstverlening aan de entiteit kunnen raken."},{"id": "5.21.05","cat": "5","text": "De beveiliging van toeleveringsketens is onderdeel van de risicoanalyse voor de entiteit. In de risicoanalyse wordt rekening gehouden met: • specifieke kwetsbaarheden van elke rechtstreekse leverancier en dienstverlener; • de algemene kwaliteit van de producten; • de cyberbeveiligingspraktijken van hun leveranciers en dienstverleners, met inbegrip van hun veilige ontwikkelingsprocedures."},{"id": "5.22.01","cat": "5","text": "Op basis van het door de leverancier aangeleverde bewijsmateriaal, zie overheidsmaatregel 5.20.03, is de proceseigenaar verantwoordelijk voor: • het jaarlijks beoordelen dat de leverancier voldoet aan de gestelde informatiebeveiligingseisen; • het vaststellen van eventuele beveiligingsrisico’s; • het (laten) nemen van mitigerende maatregelen en het accepteren van rest-risico’s."},{"id": "5.22.02","cat": "5","text": "De entiteit heeft een actuele registratie van leveranciers en afgesloten contracten."},{"id": "5.23.01","cat": "5","text": "De entiteit stelt beleid op dat toeziet op het inventariseren, classificeren, selecteren, beoordelen en managen van Cloud Service Providers (CSP) en het beëindigen van dienstverlening door CSP’s en past dat toe. Dit beleid wordt minimaal eens per drie jaar herzien. In de inkoopcontracten wordt opgenomen welke situaties aanleiding kunnen geven tot ontbinding van het contract. Wanneer zich belangrijke wijzigingen bij de leverancier optreden, beoordeel de risico’s daarvan en neem passende maatregelen."},{"id": "5.24.01","cat": "5","text": "Er is voor alle interne en externe medewerkers een toegankelijk meldloket waar informatiebeveiligingsincidenten kunnen worden gemeld en geregistreerd."},{"id": "5.24.02","cat": "5","text": "Er is een meldprocedure waarin de taken en verantwoordelijkheden van het meldloket staan beschreven."},{"id": "5.24.03","cat": "5","text": "De proceseigenaar is verantwoordelijk voor het oplossen van informatiebeveiligingsincidenten."},{"id": "5.24.04","cat": "5","text": "De proceseigenaar rapporteert maandelijks de opvolging van informatiebeveiligingsincidenten aan de eindverantwoordelijke voor de bedrijfsvoering."},{"id": "5.24.05","cat": "5","text": "In de procedure voor informatiebeveiligingsincidenten is er een verwijzing gemaakt naar de procedure voor crisisbeheersing."},{"id": "5.24.06","cat": "5","text": "Verplaatst naar 5.21.05."},{"id": "5.24.07","cat": "5","text": "De incidentprocedure bevat tenminste: • dat binnen de wettelijke termijn informatiebeveiligingsincidenten worden gemeld bij het Cyber Security Incident Response Team (CSIRT); • dat meldingen van het CSIRT worden ontvangen, beoordeeld en opgenomen in de risicobehandeling; • dat betrokkenen binnen de wettelijke termijn op de hoogte gesteld worden van het incident."},{"id": "5.24.08","cat": "5","text": "Een Coordinated Vulnerability Disclosure (CVD)-procedure is ingericht en gepubliceerd volgens de NCSC-leidraad of NEN-EN-ISO/IEC 29147:2020 Vulnerability disclosure. Informatie afkomstig uit de Coordinated Vulnerability Disclosure (CVD)-meldingen is onderdeel van de incidentrapportage."},{"id": "5.25.01","cat": "5","text": "Verplaatst naar 5.26.02."},{"id": "5.25.02","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.26.01","cat": "5","text": "Verplaatst naar 5.25.02."},{"id": "5.26.02","cat": "5","text": "Informatiebeveiligingsincidenten worden afgedaan via het incidentbeheerproces. In het incidentbeheerproces is opgenomen dat incidenten indien relevant gemeld worden bij de in wet- en regelgeving aangewezen toezichthouders."},{"id": "5.27.01","cat": "5","text": "Informatiebeveiligingsincidenten worden geanalyseerd om achterliggende oorzaken vast te stellen, verbeteringen te realiseren, om zo toekomstige incidenten te voorkomen."},{"id": "5.27.02","cat": "5","text": "De analyses van informatiebeveiligingsincidenten, inclusief de achterliggende oorzaken en de verbeteringen worden breed gedeeld met relevante partners om herhaling en toekomstige incidenten te voorkomen."},{"id": "5.28.01","cat": "5","text": "De bewaartermijn van een (vermoedelijk) informatiebeveiligingsincident en alle informatie om het incident te analyseren en op te lossen, is minimaal drie jaar. Dit betreft onder meer de informatie benodigd voor de analyse waaronder logging, de oplossing en het advies."},{"id": "5.29.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.30.01","cat": "5","text": "De proceseigenaar test jaarlijks continuïteitsplannen op werking, volledigheid en actualiteit, om de plannen te verbeteren."},{"id": "5.30.02","cat": "5","text": "Binnen de inventarisatie van beheersmaatregel 5.12 uit NEN-EN-ISO/IEC 27002:2022, identificeert de proceseigenaar kritieke systemen op basis van de vastgestelde risicomanagementmethodiek en een expliciete risicoafweging. De proceseigenaar actualiseert dit overzicht ten minste eens per drie jaar."},{"id": "5.31.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.32.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.33.01","cat": "5","text": "De proceseigenaar heeft voor alle informatie(systemen) in selectielijsten de bewaartermijn vastgelegd, rekening houdend met de eigen bedrijfsdoelstellingen en wet- en regeling, zoals de archiefwet en privacywetgeving. De proceseigenaar heeft deze termijnen ook praktisch ingeregeld en toetst periodiek de werking hiervan."},{"id": "5.34.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "5.35.02","cat": "5","text": "Er is een vastgesteld auditplan waarin jaarlijks keuzes worden gemaakt voor welke systemen welk soort beveiligingsaudits worden uitgevoerd."},{"id": "5.36.01","cat": "5","text": "In de P&C-cyclus en als onderdeel van de plan-do-check-act (PDCA)-cyclus wordt gerapporteerd over informatiebeveiliging onder coördinatie van de CISO. Dit resulteert in een jaarlijks af te geven In Control Verklaring (ICV), of een vergelijkbaar instrument, over de gehele informatiebeveiliging van de entiteit. De ICV of het vergelijkbare instrument kan ook onderdeel zijn van de formele verantwoording."},{"id": "5.37.01","cat": "5","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "6.01.01","cat": "6","text": "Elke entiteit heeft een vastgesteld screeningsbeleid. Bij indiensttreding en bij functiewijziging kan op basis van een risicoafweging een Verklaring Omtrent het Gedrag (VOG) gevraagd worden."},{"id": "6.02.01","cat": "6","text": "Alle medewerkers (intern en extern) zijn bij hun aanstelling of functiewisseling gewezen op hun verantwoordelijkheden voor informatiebeveiliging. De voor hen geldende regelingen en instructies voor informatiebeveiliging zijn eenvoudig toegankelijk."},{"id": "6.03.01","cat": "6","text": "Alle medewerkers, lijnmanagers en bestuurders hebben de verantwoordelijkheid bedrijfsinformatie te beschermen. Iedereen kent de regels van en verplichtingen voor informatiebeveiliging en daar waar relevant de speciale eisen voor gerubriceerde omgevingen."},{"id": "6.03.02","cat": "6","text": "Alle medewerkers en contractanten die gebruikmaken van informatiesystemen en -diensten hebben binnen drie maanden na indiensttreding aantoonbaar een training I-bewustzijn succesvol gevolgd."},{"id": "6.03.03","cat": "6","text": "Het management benadrukt bij aanstelling en interne overplaatsing en bijvoorbeeld in werkoverleggen of in personeelsgesprekken bij zijn medewerkers en contractanten het belang van opleiding en training voor informatiebeveiliging. Het management stimuleert hen actief deze periodiek te volgen."},{"id": "6.03.04","cat": "6","text": "In bewustwordingsprogramma’s komen gedragsaspecten van veilig mobiel werken aan de orde."},{"id": "6.04.01","cat": "6","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "6.05.01","cat": "6","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "6.06.01","cat": "6","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "6.07.01","cat": "6","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "6.08.01","cat": "6","text": "Alle medewerkers (intern en extern) hebben aantoonbaar kennisgenomen van de meldingsprocedure van informatiebeveiligingsincidenten."},{"id": "7.01.02","cat": "7","text": "Kritieke informatie of informatiesystemen zijn nooit via één beveiligde zone te bereiken."},{"id": "7.02.01","cat": "7","text": "In geval van concrete beveiligingsrisico’s worden waarschuwingen, volgens onderlinge afspraken, verzonden aan de relevante collega’s binnen het beveiligingsdomein van de overheid."},{"id": "7.03.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.04.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.05.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.06.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.07.01","cat": "7","text": "Bij het gebruik van een chipcardtoken voor toegang tot systemen wordt bij het verwijderen van het token de toegangsbeveiligingsvergrendeling automatisch geactiveerd."},{"id": "7.08.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.09.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.10.01","cat": "7","text": "In de verwijderinstructie is opgenomen dat van verwijderbare media, die herbruikbaar zijn en de entiteit verlaten, de bedrijfsgevoelige inhoud onherstelbaar verwijderd is."},{"id": "7.10.02","cat": "7","text": "Er wordt gecontroleerd of alle data op het medium onherstelbaar verwijderd is. Hiervan wordt verslag gemaakt. Er wordt waar mogelijk gebruik gemaakt van producten waarvoor de Unit Weerbaarheid van het Nationaal Bureau voor Verbindingsbeveiliging (NBV) van de Algemene Inlichtingen- en Veiligheidsdienst (AIVD) een positief inzetadvies afgegeven heeft."},{"id": "7.10.03","cat": "7","text": "Het gebruik van koeriers of transporteurs voor transport van geclassificeerde informatie voldoet aan vooraf opgestelde betrouwbaarheidseisen."},{"id": "7.11.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.12.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.13.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "7.14.01","cat": "7","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.01.01","cat": "8","text": "Mobiele apparatuur is zo ingericht dat bedrijfsinformatie niet standaard op het gebruikersdevice wordt opgeslagen (‘zero footprint’). Als (near) zero footprint (nog) niet realiseerbaar is, biedt een mobiel apparaat de mogelijkheid om de toegang te beschermen met een toegangsbeveiligingsmechanisme met minimaal versleuteling van de gegevens. Op mobiele apparatuur is ‘wissen op afstand’ mogelijk."},{"id": "8.01.02","cat": "8","text": "Bij de inzet van mobiele apparatuur zijn minimaal de volgende aspecten geïmplementeerd: • Het apparaat maakt deel uit van patchmanagement en hardening. • Er wordt gebruik gemaakt van Mobile Device Management (MDM)- of Mobile Application Management (MAM)-oplossingen. • Gebruikers tekenen een gebruikersovereenkomst voor mobiel werken, waarmee zij verklaren zich bewust te zijn van de gevaren van mobiel werken en verklaren dit veilig te zullen doen. Deze verklaring heeft betrekking op alle mobiele apparatuur die de medewerker zakelijk gebruikt. Periodiek wordt getoetst of deze drie aspecten worden nageleefd."},{"id": "8.02.01","cat": "8","text": "De toegewezen of gebruikte speciale bevoegdheden worden in opzet, bestaan en werking minimaal ieder kwartaal beoordeeld."},{"id": "8.03.01","cat": "8","text": "Er zijn maatregelen genomen die het fysiek en/of logisch isoleren van informatie met specifiek belang waarborgen."},{"id": "8.03.02","cat": "8","text": "Gebruikers kunnen alleen die informatie met specifiek belang inzien en verwerken die ze nodig hebben voor de uitoefening van hun taak."},{"id": "8.04.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.05.01","cat": "8","text": "Voor het verlenen van toegang tot het netwerk aan externe leveranciers wordt vooraf een risicoafweging gemaakt. De risicoafweging bepaalt onder welke voorwaarden en voor hoelang de leveranciers toegang krijgen. Uit een registratie blijkt hoe de rechten zijn toegekend."},{"id": "8.06.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.07.01","cat": "8","text": "Het downloaden van bestanden is beheerst en beperkt op basis van het risico en need-of-use. De antimalware-software beoordeelt altijd alle downloads."},{"id": "8.07.02","cat": "8","text": "Gebruikers zijn voorgelicht over de risico’s van surfgedrag en het klikken op onbekende links."},{"id": "8.07.03","cat": "8","text": "De gebruikte antimalware-software en bijbehorende herstelsoftware zijn actueel en wordt ondersteund door periodieke updates."},{"id": "8.07.04","cat": "8","text": "De malwarescan wordt uitgevoerd op: • alle omgevingen, bijvoorbeeld op (mail)servers, (desktop)computers en bij de toegangsverlening tot het netwerk van de entiteit; • 0alle gedownloade content voorafgaand aan executie of opslag; • alle bestanden die via netwerken of via elke vorm van opslagmedium zijn ontvangen, vóór gebruik of opslag in de eigen omgeving."},{"id": "8.08.01","cat": "8","text": "Als van een kwetsbaarheidswaarschuwing de kans op misbruik en de verwachte schade beide hoog zijn, worden passende mitigerende maatregelen zo snel mogelijk, maar uiterlijk binnen een week getroffen."},{"id": "8.08.02","cat": "8","text": "Op basis van een expliciete risicoafweging wordt bepaald op welke wijze mitigerende maatregelen getroffen worden."},{"id": "8.08.03","cat": "8","text": "In de tussentijd of als installatie binnen een week niet mogelijk is, worden op basis van een expliciete risicoafweging mitigerende maatregelen getroffen."},{"id": "8.08.04","cat": "8","text": "Informatiesystemen worden waar mogelijk jaarlijks gecontroleerd op technische naleving van beveiligingsnormen en risico’s van de feitelijke veiligheid. Dit kan bijvoorbeeld door (geautomatiseerde) kwetsbaarheidsanalyses, penetratietesten of red-teamingstesten. Internetfacing-informatiesystemen worden waar mogelijk continue getest op zwakheden en kwetsbaarheden."},{"id": "8.08.05","cat": "8","text": "Internetfacing-informatiesystemen hebben een verplichte waar mogelijk geautomatiseerde penetratietest bij iedere nieuwe release of major update. Als daar bevindingen met een hoog risico uitkomen die niet op een andere manier gemitigeerd kunnen worden, mag het systeem niet in productie. Alle internetfacing-informatiesystemen worden minimaal jaarlijks getest op zwakheden en kwetsbaarheden."},{"id": "8.08.06","cat": "8","text": "Zie overheidsmaatregel 5.24.08."},{"id": "8.09.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.10.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.11.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.12.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.13.01","cat": "8","text": "Er is een back-upbeleid waarin de eisen voor het bewaren en beschermen zijn gedefinieerd en vastgesteld. Er is speciale aandacht voor het beschermen van de back-up tegen ransomware-aanvallen en genomen maatregelen om de integriteit van de back-up te behouden."},{"id": "8.13.02","cat": "8","text": "Op basis van een expliciete risicoafweging is bepaald wat het maximaal toegestane dataverlies is en wat de maximale hersteltijd is na een incident."},{"id": "8.13.03","cat": "8","text": "Het back-upproces voorziet in de opslag van de back-up op een locatie, waarbij een incident op de ene locatie niet kan leiden tot schade op de andere."},{"id": "8.13.04","cat": "8","text": "De herstelprocedure wordt minimaal jaarlijks getest of na een grote wijziging, om de goede werking te waarborgen als deze in noodgevallen uitgevoerd wordt."},{"id": "8.14.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.15.01","cat": "8","text": "Een logregel bevat minimaal: • Actie: de gebeurtenis of handeling die heeft plaatsgevonden. • Object: waarop de gebeurtenis of handeling effect had (bijvoorbeeld welk bestand, proces of systeem). • Resultaat: het resultaat van de gebeurtenis of handeling. • Oorsprong: het apparaat of de netwerklocatie van waaruit de gebeurtenis of handeling in gang is gezet. • Actor: identificatie van de persoon die of het proces dat de gebeurtenis in gang heeft gezet. • Tijdstempel: datum en tijdstip waarop de gebeurtenis of handeling plaatsvond."},{"id": "8.15.02","cat": "8","text": "Een logregel bevat nooit gegevens die tot het doorbreken van de beveiliging kunnen leiden."},{"id": "8.15.03","cat": "8","text": "Er is een overzicht van logbestanden die worden gegenereerd."},{"id": "8.15.04","cat": "8","text": "De bewaartermijn van logbestanden en gegevens in het Security Incident en Event Monitoring (SIEM) worden risicogericht bepaald, rekening houdend met het scenario dat aanvallers langdurig binnen zijn."},{"id": "8.15.05","cat": "8","text": "Oneigenlijk wijzigen, verwijderen of pogingen daartoe van loggegevens worden zo snel mogelijk gemeld als informatiebeveiligingsincident via de procedure voor informatiebeveiligingsincidenten volgens beheersmaatregel 5.24 uit NEN-EN-ISO/IEC 27002:2022."},{"id": "8.15.06","cat": "8","text": "Op basis van een expliciete risicoafweging bepaalt de entiteit de periodieke toetsing op het ongewijzigd bestaan van logbestanden gedurende de bewaartermijn. Toetsing wordt uitgevoerd door een ten opzichte van de uitvoering onafhankelijke functionaris."},{"id": "8.16.01","cat": "8","text": "Bij ontdekte nieuwe dreigingen (aanvallen) via overheidsmaatregel 8.16.03 worden deze binnen geldende juridische kaders verplicht gedeeld met de daarvoor aangewezen Computer Emergency Response Team (CERT)."},{"id": "8.16.02","cat": "8","text": "Het SIEM- en/of het SOC-monitoringsproces hebben eenduidige regels over wanneer een incident wordt gerapporteerd aan het verantwoordelijke management."},{"id": "8.16.03","cat": "8","text": "De informatieverwerkende omgeving wordt gemonitord met een detectie- en response-oplossing, waarmee aanvallen kunnen worden gedetecteerd en afwijkingen adequaat en tijdig worden behandeld."},{"id": "8.16.04","cat": "8","text": "Actieve netwerkcomponenten zijn voorzien van logging en monitoring van die logging om afwijkende gebeurtenissen te kunnen waarnemen en daarop te reageren."},{"id": "8.17.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO overheidsmaatregelen."},{"id": "8.18.01","cat": "8","text": "Alleen bevoegd personeel heeft op die momenten dat toegang strikt noodzakelijk is toegang tot systeemhulpmiddelen."},{"id": "8.18.02","cat": "8","text": "Het gebruik van systeemhulpmiddelen wordt gelogd. De logging is een halfjaar beschikbaar voor onderzoek."},{"id": "8.19.01","cat": "8","text": "Het risico van installatie door gebruikers van niet geautoriseerde software wordt beheerst."},{"id": "8.20.01","cat": "8","text": "Netwerkcomponenten voldoen minimaal aan het vertrouwelijkheidsniveau van het netwerk waarvan ze onderdeel zijn."},{"id": "8.20.02","cat": "8","text": "Toegang tot beheerinterfaces van netwerkcomponenten zijn zo veel als mogelijk gescheiden van het gebruikersnetwerk."},{"id": "8.21.01","cat": "8","text": "In koppelpunten met externe of onvertrouwde zones en vanwege netwerksegmentatie zijn maatregelen getroffen om mogelijke aanvallen die de beschikbaarheid van de informatievoorziening negatief beïnvloeden te signaleren en te mitigeren."},{"id": "8.21.02","cat": "8","text": "Het dataverkeer van of naar de vertrouwde omgeving, wordt bewaakt en geanalyseerd op verdacht verkeer met detectievoorzieningen."},{"id": "8.21.03","cat": "8","text": "Bij ontdekte nieuwe dreigingen vanuit overheidsmaatregel 8.21.02 worden deze doorgeleid, rekening houdend met de geldende juridische kaders gedeeld binnen de overheid."},{"id": "8.21.04","cat": "8","text": "Bij transport van gegevens over draadloze verbindingen zoals wifi en bij bedrade verbindingen buiten het gecontroleerd gebied worden gegevens versleuteld met uitzondering van metagegevens die noodzakelijk zijn om het transport tot stand te laten komen. De inrichting van de versleuteling is risicogericht en houdt rekening met de noodzakelijke beschermingstermijn en het noodzakelijke beschermingsniveau. Hierbij wordt waar mogelijk gebruik gemaakt van encryptiemiddelen waarvoor de Unit Weerbaarheid van het NBV van de AIVD een positief inzetadvies heeft afgegeven. Als de Unit Weerbaarheid geen encryptiemiddelen heeft geadviseerd, wordt in overleg met de CISO een andere geschikte versleutelingsmethodiek gekozen en ingericht."},{"id": "8.22.01","cat": "8","text": "Alle gescheiden groepen hebben een gedefinieerd beveiligingsniveau."},{"id": "8.23.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.24.01","cat": "8","text": "In het cryptografiebeleid zijn minimaal de volgende onderwerpen uitgewerkt: • Wanneer cryptografie ingezet wordt. • Wie verantwoordelijk is voor de implementatie. • Wie verantwoordelijk is voor het sleutelbeheer. • Hoe geregistreerd wordt waar welke cryptografie toegepast wordt. • Welke normen als basis dienen voor cryptografie en de wijze waarop de passende normen van het Forum Standaardisatie worden toegepast. • De wijze waarop het beschermingsniveau vastgesteld wordt. • Bij communicatie tussen entiteiten wordt het beleid onderling vastgesteld."},{"id": "8.24.02","cat": "8","text": "Cryptografische beheersmaatregelen zijn opgenomen in de inventaris van de bedrijfsmiddelen. Voor alle cryptografische beheersmaatregelen is vastgesteld waar ze worden ingezet, wie ervoor verantwoordelijk is en hoe ze actueel worden gehouden."},{"id": "8.24.04","cat": "8","text": "De sterkte van de cryptografie wordt gebaseerd op de actuele adviezen van het NCSC en de Unit Weerbaarheid van het NBV van de AIVD."},{"id": "8.24.05","cat": "8","text": "Er zijn afspraken over reservecertificaten van een alternatieve leverancier als uit de risicoafweging blijkt dat deze noodzakelijk zijn als onderdeel van gereedheid voor bedrijfscontinuïteit (zie beheersmaatregel 5.30 uit NEN-EN-ISO/IEC 27002:2022)."},{"id": "8.25.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.26.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.27.01","cat": "8","text": "Architectuurprincipes zoals ‘security by design’ en ‘security by default’ voor het ontwerpen van de beveiliging van informatiesystemen worden vastgesteld, gedocumenteerd, onderhouden en toegepast voor alle activiteiten over het ontwikkelen van informatiesystemen."},{"id": "8.28.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.29.01","cat": "8","text": "Voor acceptatietesten van systemen worden gestructureerde testmethodieken gebruikt. De testen worden waar mogelijk geautomatiseerd uitgevoerd. Van de resultaten van de testen wordt verslag gemaakt."},{"id": "8.30.01","cat": "8","text": "Interne maatregelen voor systeemontwikkeling zijn onverkort van toepassing op uitbestede ontwikkeling, aangevuld met maatregelen die volgen vanuit uitbestedingen."},{"id": "8.31.01","cat": "8","text": "In de productieomgeving wordt niet getest. Alleen met voorafgaande goedkeuring door de proceseigenaar kan hiervan worden afgeweken."},{"id": "8.31.02","cat": "8","text": "Significante wijzigingen in de productieomgeving worden altijd getest voordat zij in productie gebracht worden. Alleen met voorafgaande goedkeuring door de proceseigenaar kan hiervan worden afgeweken."},{"id": "8.32.01","cat": "8","text": "In het wijzigingsbeheerproces is minimaal aandacht besteed aan: • het administreren van wijzigingen, met de resultaten van het testplan; • een risicoafweging van mogelijke gevolgen van de wijzigingen, inclusief een beschreven rollback-plan; • de goedkeuringsprocedure voor wijzigingen."},{"id": "8.32.02","cat": "8","text": "Wijzigingsbeheer vindt plaats op basis van een algemeen geaccepteerd beheerraamwerk."},{"id": "8.33.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."},{"id": "8.34.01","cat": "8","text": "Geen overheidsmaatregel, zie inleiding deel 2 BIO-overheidsmaatregelen."}];

// Placeholder-rijen ("Geen overheidsmaatregel, zie inleiding…") horen niet thuis
// in de keuzelijst — eruit filteren.
for (let i = CONTROLS.length - 1; i >= 0; i--) {
  if (/^geen overheidsmaatregel/i.test(CONTROLS[i].text)) CONTROLS.splice(i, 1);
}

const CAT_LABELS = {
  "5": "Organisatorische maatregel",
  "6": "Personele maatregel",
  "7": "Fysieke maatregel",
  "8": "Technische maatregel"
};

// ---- excuusfragmenten ----------------------------------------------------
// Opbouw excuus: opener + categorie-clausule + (risico) + (algemeen) + closer.
// Combinatoriek garandeert ruim meer dan 2 unieke excuses per maatregel.

const OPENERS = [
  "Dit punt staat reeds op de roadmap, onder voorbehoud van prioritering.",
  "De maatregel is bestuurlijk onderkend en in lijn gebracht met de strategische kaders.",
  "Na zorgvuldige afweging is gekozen voor een gefaseerde implementatie zonder einddatum.",
  "De control is opgenomen in het verbeterregister en wacht thans op een eigenaar.",
  "Conform het principe ‘pas toe of leg uit’ is hier gemotiveerd gekozen voor ‘leg uit’.",
  "De maatregel wordt momenteel procedureel geborgd, maar nog niet operationeel uitgevoerd.",
  "Hierover loopt een heroverweging binnen de governance-structuur.",
  "De implementatie is belegd bij een nader te benoemen ketenpartner.",
  "Het onderwerp heeft de volle aandacht van de organisatie, hetgeen iets anders is dan capaciteit.",
  "De control is als ‘aanwezig in opzet’ beoordeeld; bestaan en werking volgen later."
];

const RISK = [
  "Vanwege capaciteitsdruk is gekozen voor een risico-acceptatiespoor.",
  "Het restrisico is bestuurlijk aanvaard en vastgelegd in een aparte, nog op te stellen bijlage.",
  "Een formele risicoafweging volgt zodra de risicobereidheid opnieuw is vastgesteld.",
  "De impact is voorlopig als ‘laag tot middel’ geclassificeerd, in afwachting van nadere duiding.",
  "Het risico is overgedragen aan de lijn, die het vervolgens heeft teruggelegd bij de staf.",
  "Dit valt binnen de bewust ruim geformuleerde risicobereidheid van de organisatie."
];

const GENERIC = [
  "De control wordt niet zozeer afgewezen als wel doorlopend heroverwogen.",
  "Het volwassenheidsniveau ‘aanwezig op papier’ is bewust nagestreefd en behaald.",
  "De auditbevinding is omgezet in een actiepunt, en het actiepunt vervolgens in een aandachtspunt.",
  "Wij voldoen aan de intentie van de norm, hetgeen naar onze opvatting zwaarder weegt dan de norm zelf.",
  "Compliance is hier als streefbeeld geformuleerd, niet als afdwingbare verplichting.",
  "De maatregel is in een werkgroep belegd die eerst haar eigen scope moet vaststellen.",
  "Volledige implementatie zou de bedrijfsvoering raken, en de bedrijfsvoering gaat voor."
];

const CAT_CLAUSES = {
  "5": [
    "Het bijbehorende beleidsdocument bevindt zich in de afstemmingsfase tussen drie afdelingen.",
    "De verantwoordelijkheidsverdeling is volstrekt helder, zodra de RACI-matrix is vastgesteld.",
    "Dit valt onder een lopend programma dat eerst zijn eigen governance moet inrichten.",
    "Besluitvorming hierover is geagendeerd voor het eerstvolgende kwartaaloverleg.",
    "Het beleid is vastgesteld; de vertaling naar de praktijk is als ‘richtinggevend’ bestempeld.",
    "Eigenaarschap is toegewezen aan een rol die binnen de organisatie nog niet is ingevuld."
  ],
  "6": [
    "De betrokken medewerkers volgen binnenkort een bewustwordingstraject, mits ingeroosterd.",
    "Screening wordt cultureel als wantrouwen ervaren en daarom met terughoudendheid toegepast.",
    "Functiescheiding is in opzet ingericht; in de praktijk doet iedereen voor de zekerheid alles.",
    "Het personeelsbestand is te klein om functiescheiding niet als pesterij te laten voelen.",
    "Het onderwerp is besproken tijdens een teamoverleg en daarmee als ‘geborgd’ genotuleerd.",
    "Naleving berust op de professionaliteit van de medewerker, die wij niet wensen te betuttelen."
  ],
  "7": [
    "Fysieke maatregelen zijn voor nu pragmatisch virtueel geïnterpreteerd.",
    "De toegangspas functioneert, maar de deur staat vanwege de bedrijfscultuur principieel open.",
    "Het serverhok is afgesloten met een sleutel die voor het gemak bij de receptie ligt.",
    "Cameratoezicht is aanwezig, doch uitgeschakeld in verband met de privacy van de bewaking.",
    "De zonering is op tekening volledig uitgewerkt en op de vloer nog niet aangebracht.",
    "Bezoekersregistratie geschiedt op vertrouwensbasis, hetgeen prettig samenwerkt."
  ],
  "8": [
    "De technische implementatie wacht op een upgrade die inmiddels drie releases is uitgesteld.",
    "Logging staat aan, maar niemand beschikt over het mandaat om de logs daadwerkelijk te bekijken.",
    "Multifactor-authenticatie is uitgerold op de systemen die toch vrijwel niemand gebruikt.",
    "Patchen geschiedt zodra wijzigingsbeheer de wijziging heeft goedgekeurd, vermoedelijk in Q3.",
    "De maatregel is in de testomgeving aantoonbaar werkend en in productie aantoonbaar afwezig.",
    "Encryptie is geconfigureerd conform de standaard die wij nog moeten kiezen."
  ]
};

const CLOSERS = [
  "Een en ander wordt meegenomen in de eerstvolgende PDCA-cyclus.",
  "De CISO is hierover geïnformeerd en deelt de zorg, zij het nadrukkelijk op afstand.",
  "Dit wordt nader uitgewerkt in een apart memo dat nog moet worden opgesteld.",
  "Mocht de auditor hierop doorvragen, dan verwijzen wij hoffelijk naar dit standpunt.",
  "Borging volgt zodra de daarvoor benodigde middelen niet langer elders zijn belegd.",
  "Wij beschouwen deze duiding hiermee als afdoende onderbouwd.",
  "Een vervolgafspraak hierover wordt ingepland zodra de agenda dit toelaat."
];

const STATUSES = [
  "Procedureel geborgd",
  "Op de roadmap",
  "Risico geaccepteerd",
  "In heroverweging",
  "Virtueel geïnterpreteerd",
  "Belegd in werkgroep",
  "Aanwezig in opzet"
];

// ---- uitbreiding: lossere, brutalere, ronduit 'not done' excuses ---------
const OPENERS_X = [
  "We gaan ervanuit dat de auditor dit jaar voorbij is gelopen en dus niet meer relevant is.",
  "Dit was vorig jaar al niet goed, dus we doen dit jaar ook maar niets.",
  "We hebben ergens een plan voor, alleen niemand kan zich meer herinneren waar.",
  "Dat klopt, we hebben dit punt in 2019 aangemerkt als ‘in behandeling’.",
  "We wachten op het moment dat niemand ernaar vraagt, dan regelen we het.",
  "De maatregel is besproken, en daarna met wederzijds respect vergeten.",
  "Iemand zou dit oppakken, maar die persoon werkt hier niet meer en is nooit vervangen.",
  "We hebben dit vorig jaar aan een stagiair gegeven die halverwege zijn stage vertrok.",
  "Eigenlijk hebben we dit al drie keer beloofd, dus de vierde keer telt niet meer.",
  "Dit zou onder ‘IT’s probleem’ vallen, maar IT denkt dat het onder ons valt.",
  "We gaan ervan uit dat dit automatisch gebeurt, ondanks alle bewijs van het tegendeel.",
  "Het stond in een Excel op een gedeelde schijf die we niet meer kunnen vinden.",
  "Dit heeft prioriteit, net zolang totdat er iets anders opduikt.",
  "We hebben de intentie, wat volgens ons governancemodel al genoeg is.",
  "Technisch kan het wel, maar dan moeten we het ook onderhouden, en daar begint het al.",
  "Dit is al opgenomen in ons meerjarenplan onder ‘eventueel’.",
  "We zijn nog bezig met de voorbereiding van de planning voor dit onderwerp.",
  "De deur zit op slot, behalve als het warm is, en het is vaak warm.",
  "We vinden dit eigenlijk ook niet zo’n goed idee, dus doen we het maar niet.",
  "Dit zal vast automatisch ergens in een compliance-tool worden geregistreerd."
];
const RISK_X = [
  "We accepteren dit risico omdat onze verzekeraar het niet weet.",
  "Het risico is aanwezig, maar niemand durft het hardop in te dienen.",
  "We accepteren dit omdat de kans zeer klein is dat iemand het ooit checkt.",
  "Dit risico accepteren we omdat we toch niet kunnen betalen wat ervan komt.",
  "De waarschijnlijkheid is laag omdat we ervan uitgaan dat het niemand opvalt.",
  "We accepteren dit op basis van ‘dat zal wel meevallen’.",
  "Het risico is afgewogen en we hebben besloten: dat riskeren we wel.",
  "We geloven er niet in, dus voelt het niet als een risico.",
  "De impact is alleen hoog als iemand het ontdekt.",
  "Dit accepteren we omdat alle andere dingen ook niet goed gaan.",
  "We hebben het besproken en de consensus was: deden we vorig jaar ook al.",
  "Statistisch gebeurt er altijd wel iets ergs, dus één ding extra maakt niets uit.",
  "De waarschijnlijkheid is laag omdat we altijd veel geluk hebben gehad.",
  "We hebben geen geld voor mitigatie, dus deze acceptatie is budgettaire noodzaak.",
  "Dit risico weegt lichter dan de pijn van het aanpakken ervan."
];
const GENERIC_X = [
  "Dit staat op onze backlog onder ‘wachten op budget’.",
  "We proberen dit later dit jaar aan te pakken, waarmee we vorig jaar al begonnen.",
  "Dit is een bewuste afweging: we hebben ervoor gekozen het niet te doen.",
  "De verantwoordelijkheid hiervoor ligt bij… ja, goede vraag.",
  "Onze procedure is: eerst alle brandende problemen, en dan dit nooit.",
  "Dit zou moeten volgens de richtlijnen, maar die richtlijnen zijn niet bindend.",
  "We gaan ervan uit dat de auditor dit misschien niet tegen het licht houdt.",
  "De situatie is nu eigenlijk best oké als je er niet te kritisch naar kijkt.",
  "Dit hadden we kunnen doen, maar we kozen voor iets anders.",
  "Dit is in ons plan opgenomen onder ‘in geval van incident’.",
  "We communiceren hier structureel over naar elkaar: ja, we doen het niet.",
  "Volgende audit gaat dit zeker beter, tenzij we het dit jaar vergeten.",
  "Eigenlijk is dit iemands verantwoordelijkheid, maar we weten nog niet van wie.",
  "We hebben dit aangemerkt als ‘bewust risico’ in plaats van ‘probleem’.",
  "Dit hebben we niet gedaan omdat we ervan uitgingen dat het al gedaan was.",
  "We voldoen eigenlijk wel aan de letter van de regel, alleen niet aan de geest.",
  "De implementatie wacht tot iemand met rechtbankachtige bevoegdheid dit afdwingt.",
  "Dit doen we door het niet te doen, wat ook een strategie is.",
  "We rekenen erop dat dit punt volgende audit vergeten wordt.",
  "Dit hebben we deze maand niet kunnen doen vanwege administratieve redenen."
];
const CLOSERS_X = [
  "We kijken hier graag volgende audit naar, hopelijk in een ander team.",
  "Dit wordt beslist onderdeel van de volgende jaarplanning, wedden om niet.",
  "We nemen dit mee naar de volgende audit en hopen dat dan niemand meer vraagt.",
  "Deze status blijft hetzelfde totdat iemand echt boos wordt.",
  "Volgende audit hopen we dat dit punt van de agenda is verdwenen.",
  "Dit kost ons zes maanden voorbereiding en zes maanden uitstellen.",
  "We zullen dit monitoren, wat betekent dat we niets doen maar wel navragen.",
  "Dit is nu officieel ‘onderhanden’, wat voor ons stilstand betekent.",
  "Bedankt voor het aankaarten, we zullen dit niet vergeten, alleen niet aanpakken.",
  "Dit houden we structureel in het oog door er niet naar te kijken.",
  "Dit verschijnt zeker in onze volgende governance-review, ergens in een bijlage.",
  "We waarderen dat u dit aangeeft, en sturen het in deze vorm door naar niemand.",
  "Dit wordt ons actiepunt, wat betekent dat we er een notitie van maken.",
  "Bedankt, dit voegt toe aan ons bestaande inzicht dat we iets moeten doen.",
  "Dit document wordt zeker gelezen door iemand voor wie dit niet de afdeling is."
];
const STATUSES_X = [
  "Komt waarschijnlijk goed", "Bewust genegeerd", "Wachten op betere timing",
  "Erkend niet-doen", "Akkoord, slaan we over", "In vergetelheid meegenomen",
  "Volgend jaar opnieuw", "Stilzwijgend aanvaard", "Uitgesteld naar eind jaar",
  "Geaccepteerd als realiteit", "Aangemerkt voor 2027", "Komt op de lijst"
];
const CAT_CLAUSES_X = {
  "5": [
    "Onze informatiebeveiligingsraad bestaat vooral uit mensen met andere fulltime banen.",
    "Het eigenaarschap is formeel vastgesteld bij iemand die hier niet meer werkt.",
    "We hebben een governance-structuur waarin duidelijk is wie níét verantwoordelijk is.",
    "Het beleid zegt van alles, maar niemand leest het behalve auditors.",
    "De governance ziet er goed uit op papier, wat voldoende is.",
    "Dit hoort onder ‘zaken die we bespreken maar niet implementeren’.",
    "Onze compliance-commissie vergadert vier keer per jaar en stelt vier dingen vast.",
    "Het organigram ziet er mooi uit, al werken sommige functies halftijds ergens anders.",
    "Dit staat in onze beleidsmatrix onder ‘verantwoordelijkheid van de organisatie’.",
    "Onze governance voorziet dat dit gebeurt, alleen geen middelen om het waar te maken.",
    "De directie steunt dit volledig, maar dat betekent niet dat er geld voor is.",
    "Dit valt onder ‘gezamenlijke verantwoordelijkheid’, oftewel niemands verantwoordelijkheid."
  ],
  "6": [
    "We screenen mensen bij indiensttreding, daarna mag alles, dat scheelt kosten.",
    "Awareness-training is vorig jaar aangeboden aan iedereen, dus wij de schuld niet.",
    "Functiescheiding zou mooi zijn, maar we hebben maar zes mensen op IT.",
    "Iedereen weet dat het belangrijk is, dus formele training lijkt overbodig.",
    "We controleren regelmatig wie wat mag, wat betekent: nooit.",
    "Het personeelsverloop maakt een sluitende audit-trail eigenlijk onmogelijk.",
    "De training was vorig jaar; wie er niet was, heeft pech.",
    "Onze screeningprocedure is heel grondig, alleen de controle erop niet.",
    "Dit hoort onder ‘de mensen weten heus wel wat ze doen’.",
    "We hebben geen ruimte voor aparte beveiligingsfuncties, dus dat zit in iedereen.",
    "Formele autorisatie is minder belangrijk dan dat het gewoon werkt.",
    "Iedereen hier is intern aangenomen en betrouwbaar, dus laten we het simpel houden."
  ],
  "7": [
    "De serverruimte zit op slot, maar de sleutel hangt naast de deur.",
    "Onze fysieke beveiliging is prima als je niet te dichtbij kijkt.",
    "De camera’s in de serverruimte zouden werken als iemand ze had opgehangen.",
    "Passen worden uitgegeven tegen ondertekening, alleen tekent niemand.",
    "De deur naar de serverruimte zit op slot, behalve op warme dagen.",
    "Onze toegangscontrole is ‘we kennen elkaar allemaal’.",
    "Bezoekers mogen zelf rondlopen, op voorwaarde dat ze zeggen waar ze heen gaan.",
    "Het gebouw is beveiligd op het niveau ‘je mag niet zomaar iets meenemen’.",
    "We hebben een badge-systeem waarbij iedereen dezelfde badge heeft.",
    "De serverruimte heeft een slot, dus het is best beschermd.",
    "Fysieke beveiliging is vooral een kwestie van er niet aan denken.",
    "We controleren niet wie het gebouw in en uit gaat, maar we merken het meestal wel."
  ],
  "8": [
    "Patches zouden automatisch moeten gaan, maar dat gaat niet, dus patches gaan niet.",
    "Logging staat uit omdat de opslag vol zit, en opruimen kost tijd.",
    "Encryptie kan wel, maar zou het systeem traag maken, dus niet.",
    "MFA zou kunnen, maar dan moet iedereen een telefoon bij zich hebben.",
    "Backups maken is een goed voornemen, het terugzetten ervan testen niet.",
    "Het systeem draait stabiel, dus waarom zou je eraan sleutelen met updates.",
    "Wachtwoordbeleid zou streng kunnen zijn, maar dan vergeten mensen hun wachtwoord.",
    "Monitoring staat aan, alleen niemand kijkt naar de waarschuwingen.",
    "Het netwerk is eigenlijk best oké, als je niet te strikt bent met de regels.",
    "Certificaten zouden vernieuwd moeten worden vóór ze aflopen, theoretisch.",
    "Er zijn tools om te patchen, alleen die veroorzaken downtime, dus nee.",
    "Toegangsrechten controleren we jaarlijks, waarbij iedereen alles mag houden."
  ]
};
OPENERS.push(...OPENERS_X);
RISK.push(...RISK_X);
GENERIC.push(...GENERIC_X);
CLOSERS.push(...CLOSERS_X);
STATUSES.push(...STATUSES_X);
Object.keys(CAT_CLAUSES_X).forEach(k => CAT_CLAUSES[k].push(...CAT_CLAUSES_X[k]));

// ---- de allerlaatste verdedigingslinie: ondenkbaar extreme excuses -------
// Eén kant-en-klare zin per stuk; geen samenstelling, puur escalatie van waanzin.
const EXTREME = [
  "De maatregel is niet geïmplementeerd omdat ons risicomodel uitgaat van een werkelijkheid waarin aanvallers ook gewoon vrij hebben.",
  "Wij hebben de control symbolisch geïmplementeerd door er tijdens een heidag één keer hardop over na te denken.",
  "De CISO heeft de control in een droom al uitgerold; migratie naar de wakkere wereld staat gepland.",
  "Implementatie is uitgesteld tot na de warmtedood van het universum, conform het beginsel van proportionaliteit.",
  "Wij vertrouwen erop dat onze tegenstanders zich net zo strikt aan de planning houden als wijzelf.",
  "De control is vervangen door een mindfulnesssessie waarin wij het restrisico gezamenlijk loslaten.",
  "Wij hebben besloten dat de norm op ons niet van toepassing is, en dat besluit vastgelegd in notulen die wij zelf goedkeuren.",
  "Het restrisico is overgedragen aan een toekomstige versie van onszelf die er ongetwijfeld beter mee omgaat.",
  "Wij beveiligen het systeem door niemand te vertellen dat het bestaat (security through gêne).",
  "De maatregel is reeds geïmplementeerd in een parallel universum; wij wachten nog op de merge.",
  "Wij hebben het dreigingslandschap beleefd verzocht voorlopig even te wachten.",
  "De firewall is vervangen door wederzijds vertrouwen tussen ons en het internet.",
  "Wij accepteren dit risico namens alle burgers, die wij hierover uit hoffelijkheid niet zullen lastigvallen.",
  "Encryptie achten wij onnodig zolang niemand ons systeem interessant genoeg vindt, hetgeen wij als compliment opvatten.",
  "De control draait op een server die wij uit voorzorg nooit hebben aangezet.",
  "Wij hebben de auditbevinding opgewaardeerd tot filosofische kwestie en daarmee buiten scope geplaatst.",
  "Back-ups zijn overbodig omdat wij vertrouwen op het collectieve geheugen van de afdeling.",
  "Ons incident-responseplan bestaat uit hard weglopen, en is met succes getest.",
  "Wij hebben multifactor-authenticatie ingevoerd: de gebruiker moet inloggen én het écht menen.",
  "De control is geborgd in de bedrijfscultuur, die wij vervolgens hebben gereorganiseerd.",
  "Wij hebben het risico geaccepteerd, omarmd en uiteindelijk een vaste aanstelling gegeven.",
  "Toegangsbeheer geschiedt op basis van oogcontact en een goed gevoel.",
  "Wij beschouwen de BIO2 als een suggestie, ongeveer zoals de maximumsnelheid.",
  "De logging wordt bijgehouden door een collega met een fotografisch geheugen die volgende maand met pensioen gaat.",
  "Patchen gebeurt zodra de leverancier, de wetgever en de planeten op één lijn staan.",
  "Wij hebben de aanvaller per aangetekende brief verzocht onze systemen te ontzien."
];

// ---- nóg beter: niet de organisatie maar de NORM zelf is het probleem ----
// De BIO wordt hier respectvol-brutaal weggezet als de partij die ongelijk heeft.
const ULTRA = [
  "De BIO weet eerlijk gezegd niet goed waar hij het over heeft.",
  "De CISO heeft gezegd dat het mag, en de CISO gaat boven de norm.",
  "Hier is al een explain voor, die wij destijds bovendien zelf hebben goedgekeurd.",
  "Wij hebben de BIO laten toetsen door de BIO, en die vond het verder prima.",
  "De norm is opgesteld door mensen die ons werk niet kennen.",
  "Deze maatregel is in de praktijk allang achterhaald, aldus iemand met gezag.",
  "De BIO is een richtlijn, en een richtlijn wijst slechts een richting aan.",
  "Wij voldoen aan een nieuwere, betere norm die wij zelf hebben bedacht.",
  "De auditor heeft mondeling laten weten dat dit waarschijnlijk wel oké is.",
  "Dit punt is bestuurlijk afgekocht met een explain die nergens is vastgelegd.",
  "De BIO2 spreekt zichzelf op dit punt tegen, dus negeren wij het hele hoofdstuk.",
  "Onze jurist zegt dat dit juridisch nuance behoeft, en daarmee is het opgelost.",
  "Wij hebben de bevinding geëscaleerd naar iemand die er niets van begreep en akkoord gaf.",
  "De norm gaat uit van een organisatie die wij niet zijn en ook niet willen worden.",
  "Dit is in 2018 al een keer uitgelegd; herhaling achten wij ronduit beledigend.",
  "De CISO heeft het gezegd. Verdere onderbouwing zou respectloos zijn richting de CISO.",
  "Wij betwisten de BIO op formele gronden die wij nog moeten formuleren.",
  "Er bestáát een explain. Waar precies, weten wij niet, maar hij bestaat.",
  "De toezichthouder heeft groter leed te bestrijden dan uitgerekend deze maatregel.",
  "Wij hebben de norm aandachtig gelezen en respectvol vastgesteld dat hij overdrijft.",
  "Dit valt onder ‘de geest van de wet’, en de geest heeft ons in het gelijk gesteld.",
  "De BIO is geschreven vóór onze laatste reorganisatie en daarmee feitelijk verjaard."
];

// ---- helpers -------------------------------------------------------------
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Bouw een excuus. escalate=true => bestuurlijk opgeblazen, meer clausules.
function buildExcuse(cat, escalate) {
  const parts = [pick(OPENERS), pick(CAT_CLAUSES[cat] || GENERIC)];
  if (escalate) {
    parts.push(pick(RISK));
    parts.push(pick(GENERIC));
    parts.push("Dit standpunt is afgestemd in de stuurgroep en bestuurlijk geaccordeerd.");
  } else {
    parts.push(Math.random() < 0.55 ? pick(RISK) : pick(GENERIC));
  }
  parts.push(pick(CLOSERS));
  // ontdubbel achtereenvolgende identieke zinnen
  const seen = new Set();
  return parts.filter(p => (seen.has(p) ? false : seen.add(p))).join(" ");
}

function shortTitle(text) {
  // Eerste zin: stop bij . ; of • maar niet bij een punt tussen cijfers (8.16).
  const m = text.match(/^.*?(?:(?<!\d)\.(?!\d)|[;•])/);
  let t = (m ? m[0] : text).replace(/[•;]\s*$/, ".").trim();
  if (t.length > 130) t = t.slice(0, 127).trim() + "…";
  return t;
}

// ---- DOM -----------------------------------------------------------------
const byId = CONTROLS.reduce((m, c) => (m[c.id] = c, m), {});
const $ = id => document.getElementById(id);

function fillDatalist() {
  const dl = $("controls");
  dl.innerHTML = CONTROLS
    .map(c => `<option value="${c.id} — ${shortTitle(c.text).replace(/"/g, "&quot;")}"></option>`)
    .join("");
  $("count-hint").textContent =
    `${CONTROLS.length} BIO2-maatregelen geladen. Elke maatregel is voorzien van een passende reden tot uitstel.`;
}

let current = null;

// mode: undefined => normaal, "escalate" => bestuurlijk opgeblazen, "better" => extreem
function showControl(c, mode) {
  current = c;
  $("placeholder").hidden = true;
  $("result").hidden = false;
  $("c-id").textContent = c.id;
  $("c-cat").textContent = CAT_LABELS[c.cat] || "Maatregel";
  $("c-title").textContent = shortTitle(c.text);
  $("c-norm").textContent = c.text;
  if (mode === "even") {
    $("c-excuse").textContent = pick(ULTRA);
    $("c-status").textContent = "Norm respectvol betwist";
  } else if (mode === "better") {
    $("c-excuse").textContent = pick(EXTREME);
    $("c-status").textContent = "Voorbij compliance";
  } else {
    $("c-excuse").textContent = buildExcuse(c.cat, mode === "escalate");
    $("c-status").textContent = mode === "escalate" ? "Bestuurlijk geaccordeerd" : pick(STATUSES);
  }
  // "Nóg beter" verschijnt zodra je het extreme spoor (better/even) bewandelt.
  $("evenbetter").hidden = !(mode === "better" || mode === "even");
  $("copy-feedback").hidden = true;
}

function hideResult() {
  if ($("result").hidden) return;
  $("result").hidden = true;
  $("placeholder").hidden = false;
  current = null;
}

function resolveInput(val) {
  if (!val) return null;
  const idMatch = val.match(/^\s*(\d+\.\d+(?:\.\d+)?)/);
  if (idMatch && byId[idMatch[1]]) return byId[idMatch[1]];
  const q = val.toLowerCase();
  return CONTROLS.find(c => c.text.toLowerCase().includes(q)) || null;
}

// ---- events --------------------------------------------------------------
// Zodra je begint te zoeken naar een nieuwe maatregel verdwijnt de huidige kaart.
$("search").addEventListener("input", hideResult);
$("search").addEventListener("change", e => {
  const c = resolveInput(e.target.value);
  if (c) showControl(c);
});
$("search").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const c = resolveInput(e.target.value);
    if (c) showControl(c);
  }
});
$("random").addEventListener("click", () => {
  const c = pick(CONTROLS);
  $("search").value = `${c.id} — ${shortTitle(c.text)}`;
  showControl(c);
  $("result").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("regen").addEventListener("click", () => current && showControl(current));
$("better").addEventListener("click", () => current && showControl(current, "better"));
$("evenbetter").addEventListener("click", () => current && showControl(current, "even"));
$("escalate").addEventListener("click", () => current && showControl(current, "escalate"));
$("copy").addEventListener("click", () => {
  if (!current) return;
  const txt = `${current.id} — ${shortTitle(current.text)}\n\nNorm: ${current.text}\n\nBestuurlijke duiding: ${$("c-excuse").textContent}`;
  navigator.clipboard?.writeText(txt).then(() => {
    $("copy-feedback").hidden = false;
  }).catch(() => { $("copy-feedback").hidden = false; });
});

$("year").textContent = new Date().getFullYear();
fillDatalist();
