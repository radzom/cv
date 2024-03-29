export default {
  personal: {
    name: "Gunnar Radzom",
    title: "Web und Cloud Enthusiast",
    picture: "pics/profile.jpg",
    description: `Das <strong>Erstellen großartiger Software</strong> ist es, was mich antreibt und motiviert.
      Mir geht es um den gesamten <strong>gemeinschaftlichen Prozess</strong>, aus einer anfänglichen Idee
      ein fertiges Software Produkt zu entwickeln.
      <strong>Neue Technologien und Frameworks</strong> wecken in mir die Neugier und den Drang, sie auszuprobieren.`
  },
  sections: [
    {
      id: "profile",
      title: "Persönliche Daten",
      items: [
        {
          type: "text",
          label: "Name",
          content: "Gunnar Radzom"
        },
        {
          type: "text",
          label: "Geboren",
          content: "Im Februar 1973 - Berlin, Deutschland"
        },
        {
          type: "text",
          label: "E-Mail-Adresse",
          content: "gunnar@radzom.net"
        },
        {
          type: "links",
          label: "Finde mich auf",
          content: [
            {
              type: "linkedin",
              url: "https://www.linkedin.com/in/gunnar-radzom-b9a90125a/"
            },
            {
              type: "xing",
              url: "https://www.xing.com/profile/Gunnar_Radzom"
            },
            {
              type: "github",
              url: "https://github.com/radzom/"
            },
          ]
        }
      ]
    },
    {
      id: "skills",
      title: "Fähigkeiten",
      items: [
        {
          type: "list",
          label: "Sprachkenntnisse",
          content: [
            {
              label: "Deutsch",
              description: "Muttersprache"
            },
            {
              label: "Englisch",
              description: "verhandlungssicher"
            },
            {
              label: "Spanisch und Französisch",
              description: "Grundkenntnisse"
            }
          ]
        },
        {
          type: "list",
          label: "Programmierkenntnisse",
          content: [
            {
              label: "Javascript",
              description: `
                18+ Jahre Erfahrung in der Entwicklung von Webanwendungen unter Verwendung moderner
                Frameworks/Bibliotheken wie React, Vue, Angular, Svelte. Sehr gute Kenntnisse in Node, ES, npm,
                Express und Fastify.`
            },
            {
              label: "C#",
              description: `
                12+ Jahre Erfahrung mit der Entwicklung von .NET Web Anwendungen und Backend Lösungen
                (ASP.NET MVC, WebAPI, AutoFac, StructureMap, Swagger, IdentityServer).`
            },
            {
              label: "Java",
              description: `
                6+ Jahre Erfahrung (Spring Boot, Maven)`
            },
            {
              label: "HTML/CSS",
              description: "Sehr gutes Verständnis von HTML 5 and CSS 3."
            },
            {
              label: "Andere Sprachen",
              description: "Clojure, C, C++, Elm, Elixir."
            }
          ]
        },
        {
          type: "list",
          label: "Tools / Methodiken",
          content: [
            {
              label: "Datenbanken",
              description: `
                Langjährige Erfahrung mit unterschiedlichen SQL (MicroSoft, MySQL, Postgres)
                und NoSQL (Mongo, CouchDB, Redis) Datenbanken. Kenntnisse in Datalog.`
            },
            {
              label: "Container / Clouds",
              description: "Docker, Openshift, AWS"
            },
            {
              label: "Agilität",
              description: "Scrum, Kanban."
            },
            {
              label: "Testautomatisierung",
              description: `
                16+ Jahre Erfahrung in Testautomatisierung inklusive TDD, BDD und Integrationstests.`
            },
            {
              label: "Versionskontrolle",
              description: "GitLab, GitHub"
            }
          ]
        },
        {
          type: "list",
          label: "Zertifikate",
          content: [
            {
              label: "ISAQB Advanced Level",
              description: "Die Module DDD, FLEX und FUNAR wurden erfolgreich abgeschlossen"
            },
            {
              label: "ISAQB Foundation Level",
              description: "Erfolgreich abgeschlossen"
            },
            {
              label: "Apache Kafka",
              description: "Confluent Developer Skills for Building Apache Kafka erfolgreich abgeschlossen"
            },
            {
              label: "diverse Schulungen",
              description: "Leadership, Angular, .NET, FP"
            }
          ]
        },
        {
          type: "list",
          label: "Sonstige",
          content: [
            {
              label: "Führung",
              description: "6+ Jahre Erfahrung in der Führung von Software Teams mit (5-10 Entwicklern)."
            },
            {
              label: "Training",
              description: "10+ Jahre Erfahrung im Halten von internen Entwicklerschulungen, Trainings und Vorträgen."
            },
            {
              label: "Opensource",
              description: "Entwicklung eines Encryption-Layers für die LevelDB"
            }
          ]
        }
      ]
    },
    {
      id: "education",
      title: "Ausbildung",
      items: [
        {
          type: "education",
          label: "Diplom-Informatiker ",
          school: "Friedrich-Alexander-Universität Erlangen",
          graduated: "2004",
          content: `
            Die Schwerpunkte waren Computergrafik,
            Kommunikationssysteme, Datenbanksysteme und das Nebenfach Physiologie.`
        },
        {
          type: "education",
          label: "Abitur",
          school: "Viktoria-Luise-Gymnasium",
          graduated: "1992",
          content: `Die Leistungsfächer waren Mathe und Physik.`
        }
      ]
    },
    {
      id: "work-history",
      title: "Berufserfahrung",
      items: [
        {
          type: "work",
          company: "adorsys GmbH & Co. KG",
          label: "Chair-Co-lead Software Engineering",
          from: "März 2022",
          to: "heute",
          content: `
            Als Chair-Co-Lead waren unter anderem meine Aufgaben die Erstellung von Karrierepfaden für unsere
            Entwickler, die Einführung eines Tech-Radars, der Aufbau eines Architekturboards und die Gestaltung
            der Lead-Developer Laufbahn.`,
          keywords: ["Enabling", "Leadership", "Cloud Native", "Confluence", "Miro"]
        },
        {
          type: "work",
          company: "adorsys GmbH & Co. KG",
          label: "Senior Architect",
          from: "April 2017",
          to: "heute",
          content: `
            Als Architekt helfe ich unseren Kunden bei der Auswahl, Konzeption, Entwicklung und in
            Betriebnahme ihrer Produkte und Anwendungen.
            Für meine Kollegen halte ich interne Trainings zur Fortbildung.
            Bei folgende Projekten konnte ich unseren Kunden helfen.
            Aufbau einer Anwendung zur Einkommensteuererklärung für Endandwender (inkl. multiplatform 
            Frontend Clients und Backends mit Anbindung an die Services des Finanzamts).
            Beratung zur Auswahl einer API-Management Lösung für eine Bank (inkl. Testinstallation zur Verprobung).
            `,
          keywords: ["API Gateway", "Kafka", "Docker", "GraphQL", "REST", "Spring Boot", "Open API", "Openshift"]
        },
        {
          type: "work",
          company: "HOTEL DE GmbH",
          label: "Senior Software Architect",
          from: "April 2016",
          to: "Februar 2017",
          content: `
            Als Architekt war ich für die Definition und Weiterentwicklung der
            Anwendungsarchitektur verantwortlich.
            Mir oblag die Evaluierung, Bewertung und Einführung neuer Technologien
            sowie die Leitung der Architektur-Gilde mit Vertretern der Scrum-Teams.
            Ich war erster Ansprechpartner bei Technologiekonflikten,
            Implementationsproblemen und technischen Entscheidungen.
            Zu meinen Aufgaben gehörten sowohl die Weiterbildung der Softwareentwickler
            als auch die Beratung und das Coaching dieser bei der Konzeption und Umsetzung.
            `,
          keywords: ["C#", "ASP.NET MVC", "ASP.NET WebAPI", "Open API", "OpenID Connect", "React.js", "Node.js", "GraphQL"]
        },
        {
          type: "work",
          company: "HOTEL DE GmbH",
          label: "Head of Websolutions",
          from: "Juli 2012",
          to: "März 2016",
          content: `
            Als Head führte ich zwei Entwicklerteams mit je vier bis sechs Entwicklern sowohl diziplinarisch als auch fachlich.
            Meine Aufgaben umfassten unter anderem das gemeinsame Festlegen von Zielen für das Team,
            das Kommunizieren sowie das Prüfen des Erreichens dieser, das Interviewen potenzieller neuer Entwickler,
            die Motivation der Mitarbeiter sowie der Umgang mit Konflikten.
            `,
          keywords: ["Scrum", "CleanCode", "Führung", "Konfliktmanagement", "Fortbildung", "Interviews"]
        },
        {
          type: "work",
          company: "LapLabs UG",
          label: "Co-Founder",
          from: "November 2016",
          to: "Juli 2017",
          content: `
            Konzeption und Erstellung eines in Echtzeit agierenden Buchungs- und Verwaltungssystems
            für Golfclubs und Spieler. Hierfür wurde eine Webanwendung für die Golfclubs erstellt.
            Die Entwicklung der mobilen App für Golfspieler erfolgte extern und wurde von mir
            technologisch betreut und abgenommen.`,
          keywords: ["Javascript", "MeteorJS", "ReactJS", "MongoDB", "Bootstrap"]
        },
        {
          type: "work",
          company: "GolfshopDeals.de",
          label: "Co-Founder",
          from: "Oktober 2014",
          to: "Juli 2017",
          content: `
            Konzeption und Implementierung eines generischen Metasearchers.
            Hierfür wurden unter anderem eine Webanwendung für Kunden, eine Webanwendung zur
            Administration und zahlreiche Services zum Importieren, Scrapen, Kategorisieren,
            Zusammenfügen und Aktualisieren der Produkte und Preise erstellt.
            `,
          keywords: ["C#", "ASP.NET MVC 5", "AngularJS", "Azure Cloud", "MongoDB", "Redis", "Bootstrap"]
        },
        {
          type: "work",
          company: "HOTEL DE GmbH",
          label: "Senior Software Developer Teamlead",
          from: "Januar 2011",
          to: "Juni 2012",
          content: `
            Als Teamlead führte ich vier Entwickler sowohl diziplinarisch als auch fachlich. Die Aufgaben
            beinhalteten mehrere Produkte (Kunden-Webanwendung, Administration-Anwendung, Services) und
            umfassten den gesamten Stack von der Datenbank bis zum UI.
            `,
          keywords: ["Scrum", "C#", "ASP.NET MVC 3", "Microsoft SQL", "IIS", "Javascript", "jQuery"]
        },
        {
          type: "work",
          company: "HOTEL DE GmbH",
          label: "Software Developer",
          from: "November 2004",
          to: "Dezember 2010",
          content: `
            Als Entwickler war ich für die Konzeption, Realisierung und Pflege bestehender und neuer
            Software-Lösungen. Dies umfasste unter anderem die Anbindung von CRS- GDS- und Switch-Schnittstellen
            an das HOTEL DE-Buchungssystem, die Entwicklung von Benutzerschnittstellen, Datenbank-Design und die
            Weiterentwicklung der Fakturierungslösung.
            `,
          keywords: ["C#", "ASP.NET Web Forms", "jQuery", "CSS", "Microsoft SQL"]
        }
      ]
    },
    {
      id: "interests",
      title: "Interessen",
      items: [
        {
          type: "text",
          label: "Sport",
          content: `
            Tennis, Klettern, Radfahren. Regelmäßige körperliche
            Aktivität ist für mich unverzichtbar, um Körper und Geist in Form zu halten.`
        },
        {
          type: "text",
          label: "Gutes Essen",
          content: `
            Körperliche Anstrengung erfordert gutes Essen - oder andersherum.
            Hierbei schätze ich es gleichermaßen, ein neues Restaurant auszuprobieren
            oder in der eigenen Küche zu experimentieren`
        },
        {
          type: "text",
          label: "Reisen",
          content: `
            Am liebsten mit Rucksack und Zelt in die Natur nach Grönland, Schottland, Skandinavien oder Neuseeland.`
        }
      ]
    }
  ]
}
