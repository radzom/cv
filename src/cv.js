export default {
  personal: {
    name: "Gunnar Radzom",
    title: "Web und Cloud Enthusiast",
    picture: "pics/profile.jpg",
    description: `Das <strong>Erstellen großartiger Software</strong> ist es was mich antreibt und motiviert.
      Mir geht es um den gesamten <strong>gemeinschaftlichen Prozess</strong> aus einer anfänglichen Idee
      ein fertiges Software Produkt zu entwickeln.
      <strong>Neue Technologien und Frameworks</strong> wecken in mir die Neugier und den Drang sie auszuprobieren.`
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
          content: "18. Februar 1973 - Berlin, Deutschland"
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
              description: "Verhandlungssicher"
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
              label: "C#",
              description: "12+ Jahre Erfahrung mit der Entwicklung von .NET Web Anwendungen und Backend Lösungen (Asp.Net MVC, WebAPI, AutoFac, StructureMap, Swagger, IdentityServer)."
            },
            {
              label: "Javascript",
              description: "8+ Jahre Erfahrung in der Entwicklung von Webanwendungen unter Verwendung moderner Frameworks/Bibliotheken wie React.js, Angular.js. Auch gut vertraut mit Node, ES6, Npm, Bower, Gulp, Webpack, Vue und Meteor."
            },
            {
              label: "HTML/CSS",
              description: "Sehr gutes Verständnis von HTML 5 and CSS 3."
            },
            {
              label: "Andere Sprachen",
              description: "C, C++, Java, Elm, Elixir"
            }
          ]
        },
        {
          type: "list",
          label: "Tools / Methodiken",
          content: [
            {
              label: "Datenbanken",
              description: "Viele Jahre Erfahrung mit unterschiedlichen SQL (MicroSoft, MySQL, Postgres) und NoSQL (Mongo, CouchDB, Redis) Datenbanken."
            },
            {
              label: "Agilität",
              description: "Scrum, Kanban."
            },
            {
              label: "Testautomatisierung",
              description: "8+ Jahre Erfahrung in Testautomatisierung inklusive TDD, BDD und Integrationstests (Selenium)."
            },
            {
              label: "Versionskontrolle",
              description: "GIT, TFS."
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
              description: "Erfahrung im halten von internen Entwicklerschulungen, Trainings und Vorträgen."
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
            Abschluss mit der Note "gut". Die Schwerpunkte waren Computergrafik,
            Kommunikationssysteme, Datenbanksysteme und Nebenfach Physiologie`
        },
        {
          type: "education",
          label: "Abitur",
          school: "Viktoria-Luise-Gymnasium",
          graduated: "1992",
          content: `Abschluss mit der Note "sehr gut". Die Leistungsfächer waren Mathe und Physik.`
        }
      ]
    },
    {
      id: "work-history",
      title: "Berufserfahrung",
      items: [
        {
          type: "work",
          company: "HOTEL DE GmbH",
          label: "Senior Software Architect",
          from: "April 2016",
          to: "heute",
          content: `
            Als Architekt bin ich für die Definition und Weiterentwicklung der
            Anwendungsarchitektur verantwortlich.
            Mir obliegt die Evaluierung, Bewertung und Einführung neuer Technologien
            sowie die Leitung der Architektur-Gilde mit Vertretern der Scrum-Teams.
            Ich bin erster Ansprechpartner bei Technologiekonflikten,
            Implementationsproblemen und technischen Entscheidungen.
            Sowohl die Weiterbildung der Softwareentwickler als auch die Beratung
            und das Coaching dieser bei der Konzeption und Umsetzung gehören zu
            meinen Aufgaben.`,
          keywords: ["C#", "Asp.NET MVC", "Asp.NET WebAPI", "Open API", "OpenID Connect", "React.js", "Node.js", "GraphQL"]
        },
        {
          type: "work",
          company: "HOTEL DE GmbH",
          label: "Head of Websolutions",
          from: "Juli 2011",
          to: "März 2016",
          content: `
            Als Head betreute ich 2 Entwicklerteams mit je 4-6 Entwicklern.
            ...folgt in kürze.

            `,
            // Meine Aufgaben
            // bestanden neben der diziplinarischen Führung auch

            // unter anderem

            // Worked as a project lead/manager and/or developer in multiple projects.
            // Responsibilities covered almost every aspect of software development
            // from technology studies and architecture design to UX/IX design.
            // Did also some client training and software methodology evaluations and
            // helping putting them into daily project practices.
          keywords: ["C#", ".Net", "WPF", "MVVM", "WCF", "Linq", "SQL", "Java"]
        },
        {
          type: "work",
          company: "LapLabs UG",
          label: "Co-Founder",
          from: "November 2016",
          to: "heute",
          content: `
            Konzeption und Erstellung eines in Echtzeit agierenden Buchungs- und Verwaltungssystems
            für Golfclubs und Spieler. Hierfür wurde eine Webanwendung für die Golfclubs erstellt.
            Die Entwicklung der App für Golfspieler erfolgte extern und wurde von mir technologisch
            betreut und abgenommen.`,
          keywords: ["Javascript", "MeteorJS", "ReactJS", "MongoDB", "Bootstrap"]
        },
        {
          type: "work",
          company: "GolfshopDeals.de",
          label: "Co-Founder",
          from: "Oktober 2014",
          to: "heute",
          content: `
            Konzeption und Implementierung eines generischen Metasearchers.
            Hierfür wurden unter anderem eine Webanwendung für Kunden, eine Webanwendung zur
            Administration und zahlreiche Services zum Importieren, Scrapen, Kategorisieren,
            Zusammenfügen und Aktualisieren der Produkte und Preise erstellt.
            `,
          keywords: ["C#", "Asp.NET MVC 5", "AngularJS", "Azure Cloud", "MongoDB", "Redis", "Bootstrap"]
        },
        {
          type: "work",
          company: "HOTEL DE GmbH",
          label: "Senior Software Developer Teamlead",
          from: "Januar 2011",
          to: "Juni 2011",
          content: `
            Als Teamlead führte ich 4 Entwickler sowohl diziplinarisch als auch fachlich. Die Aufgaben
            beinhalteten mehrere Produkte (Kunden-Webanwendung, Administration-Anwendung, Services) und
            umfassten den gesamten Stack von der Datenbank bis zum UI.
            `,
          keywords: ["C#", "Asp.Net MVC 3", "Microsoft SQL", "IIS", "Javascript", "Jquery"]
        },
        {
          type: "work",
          company: "HOTEL DE GmbH",
          label: "Software Developer",
          from: "November 2004",
          to: "Dezember 2010",
          content: `
            Als Entwickler ...folgt in kürze.
            `,
          keywords: ["C++", "Java", "Spring", "Software architecture", "GIS", "Web services"]
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
            Klettern, Badminton, Fussball, Snowboarden. Regelmäßige körperliche
            Aktivität ist für mich unverzichtbar um Körper und Geist in Form zu halten.`
        },
        {
          type: "text",
          label: "Gutes Essen",
          content: `
            Körperliche Anstrengung erfordert gutes Essen - oder andersherum.
            Hierbei schätze ich es gleichermaßen ein neues Restaurant auszuprobieren
            oder in der eigenen Küche zu experimentieren`
        },
        {
          type: "text",
          label: "Reisen",
          content: `Am liebsten mit Rucksack und Zelt dorthin wo es viel Natur und wenig Menschen gibt.`
        }
      ]
    }
  ]
}
