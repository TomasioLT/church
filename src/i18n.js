import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navbar: {
            sermons: "Sermons",
            locations: "Locations",
            about: "About",
            getInvolved: "Get Involved",
            store: "Store",
            online: "Online",
            giving: "Giving",
          },
          footer: {
            about: {
              about: "about",
              beliefs: "Beliefs",
              values: "Values",
              leadership: "Leadership",
            },
            media: {
              media: "Media",
              sermons: "Sermons",
              watchOnline: "Watch Online",
              elevationStore: "Elevation Store",
              worship: "Worship",
              podcast: "Podcast",
            },
            ministries: {
              ministries: "Ministries",
              eGroups: "eGroups",
              eKidz: "eKidz",
              outreach: "Outreach",
            },
            oppurtunities: {
              oppurtunities: "Opportunities",
              jobs: "Jobs",
              internships: "Internships",
            },
            joinUs: {
              joinUs: "Join Us",
              findALocation: "Find a Location",
              watchParties: "Watch Parties",
              events: "Events",
            },
            finance: {
              finance: "Finance",
              giving: "Giving",
            },
            personal: {
              personal: "Personal",
              myElevation: "MyElevation",
              contactUs: "Contact Us",
            },
          },
          homepage: {
            titlePicture: {
              chip: "Latest sermon",
              mainPictureTitle: "Don't Fight Your Future",
              button1: "WATCH SERMON",
              button2: "VIEW MORE SERMONS",
            },
            experience: {
              title: "Let's tailor your experience.",
              newHere: "New here?",
              partEfam: "I'm part of Efam",
              communityPart: "I'm already part of campus cummunity",
            },
            involved: {
              title: "Get Involved",
              subtitle: "See what God can do tgrough you.",
              giving: "Giving",
              groups: "Groups",
              volunteer: "Volunteer",
              outreach: "Outreach",
              efam: "eFam",
            },
            family: {
              title: "For your Family",
              subtitle: "See what God can do tgrough you.",
              ekidz: "eKidz",
              youth: "Elevation Youth",
            },
            church: {
              title: "Follow Elevation Church",
            },
            picture1: {
              title: "A New eGroup Study from Holly Furtick",
              button1: "LEARN MORE",
            },
            picture2: {
              title: "This is church. Anywhere",
              subtitle:
                "Join eFam all over the world for Elevation church Online.",
              button1: "WATCH ONLINE",
            },
          },
        },
      },
      ru: {
        translation: {
          navbar: {
            sermons: "Проповеди",
            locations: "Локации",
            about: "О Нас",
            getInvolved: "Вовлекись",
            store: "Магазин",
            online: "Онлайн",
            giving: "Пожертвование",
          },
          footer: {
            about: {
              about: "О нас",
              beliefs: "Веро-учение",
              values: "Цености",
              leadership: "Лидерство",
            },
            media: {
              media: "Медиа",
              sermons: "Проповеди",
              watchOnline: "Смотри Онлайн",
              elevationStore: "Elevation Магазин",
              worship: "Поклонение",
              podcast: "Подкаст",
            },
            ministries: {
              ministries: "Служение",
              eGroups: "Группы",
              eKidz: "Дети",
              outreach: "Евангелизация",
            },
            oppurtunities: {
              oppurtunities: "Возможности",
              jobs: "Работа",
              internships: "Стажировка",
            },
            joinUs: {
              joinUs: "Присойдиняйся",
              findALocation: "Найди локацию",
              watchParties: "Смотреть вечеринки",
              events: "Мероприятие",
            },
            finance: {
              finance: "Финансы",
              giving: "Дояние",
            },
            personal: {
              personal: "Личное",
              myElevation: "MyElevation",
              contactUs: "Связаться с нами",
            },
          },
          homepage: {
            titlePicture: {
              chip: "Последние проповедь",
              mainPictureTitle: "Не борись со своим будущим",
              button1: "СМОТРЕТЬ ПРОПОВЕДЬ",
              button2: "БОЛЬШЕ ПРОПОВЕДЕЙ",
            },
            experience: {
              title: "Давайте адаптируем ваш опыт.",
              newHere: "Первый раз здесь?",
              partEfam: "Я часть группы eFam",
              communityPart: "Я уже являюсь частью сообщества кампуса",
            },
            involved: {
              title: "Втягиваться",
              subtitle: "Посмотрите, что Бог может сделать через вас.",
              giving: "Даяние",
              groups: "Группы",
              volunteer: "Волонтер",
              outreach: "Евангелизация",
              efam: "eFam",
            },
            family: {
              title: "Для твоей семьи",
              subtitle: "Посмотрите, что Бог может сделать через вас.",
              ekidz: "Дети",
              youth: "Молодежь",
            },
            church: {
              title: "Зледуй за церковью",
            },
            picture1: {
              title: "Новая груаппа изучения от Holly Furtick",
              button1: "УЗНАЙ БОЛЬШЕ",
            },
            picture2: {
              title: "Это церковь. Везде",
              subtitle:
                "Присоединяйтесь к eFam по всему миру для церкви Elevation Online.",
              button1: "СМОТРИ ОНЛАЙН",
            },
          },
        },
      },
      lt: {
        translation: {
          navbar: {
            sermons: "Pamokslai",
            locations: "Lokacijos",
            about: "Apie mus",
            getInvolved: "Įsitrauk",
            store: "Parduotuvė",
            online: "Online",
            giving: "Paaukojimai",
          },
          footer: {
            about: {
              about: "Apie mus",
              beliefs: "Tikėjimas",
              values: "Vertybės",
              leadership: "Lyderyste",
            },
            media: {
              media: "Media",
              sermons: "Pamokslai",
              watchOnline: "Žiūrėti Online",
              elevationStore: "Elevation Parduotuvė",
              worship: "Šlovinimas",
              podcast: "Podkastai",
            },
            ministries: {
              ministries: "Tarnavimai",
              eGroups: "Grupės",
              eKidz: "Vaikai",
              outreach: "Evangelizacija",
            },
            oppurtunities: {
              oppurtunities: "Galimybės",
              jobs: "Darbai",
              internships: "Stažuotė",
            },
            joinUs: {
              joinUs: "Prisijunkite",
              findALocation: "Rask lokaciją",
              watchParties: "Žiūrėti vakarėlius",
              events: "Renginiai",
            },
            finance: {
              finance: "Finansai",
              giving: "Paaukojimai",
            },
            personal: {
              personal: "Asmeninis",
              myElevation: "Mano Elevation",
              contactUs: "Susisiek su mumis",
            },
          },
          homepage: {
            titlePicture: {
              chip: "Paskutinis pamokslas",
              mainPictureTitle: "Nekovokite su savo ateitimi",
              button1: "ŽIŪRĖK PAMOKSLĄ",
              button2: "DAUGIAU PAMOKSLŲ",
            },
            experience: {
              title: "Pritaikykime jūsų patirtį.",
              newHere: "Naujas čia?",
              partEfam: "Aš esu eFam dalis",
              communityPart: "Aš jau esu campus bendruomenės dalis",
            },
            involved: {
              title: "Įsitrauk",
              subtitle: "Pamatyk ką Dievas gali padaryti per tave.",
              giving: "Paaukojimai",
              groups: "Grupės",
              volunteer: "Savanoriavimas",
              outreach: "Evangelizacija",
              efam: "eFam",
            },
            family: {
              title: "Tavo šeimai",
              subtitle: "Pamatyk ką Dievas gali padaryti per tave.",
              ekidz: "eKidz",
              youth: "Jaunimas",
            },
            church: {
              title: "Sek Elevation bažnyčia",
            },
            picture1: {
              title: "Nauja studijos grupė nuo Holly Furtick",
              button1: "SUŽINOK DAUGIAU",
            },
            picture2: {
              title: "Tai bažnyčia. Betkur.",
              subtitle:
                "Prisijunk prie eFam iš viso pasaulio žiūrėdamas Online.",
              button1: "ŽIŪRĖTI ONLINE",
            },
          },
        },
      },
    },
  });

export default i18n;
