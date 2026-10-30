
import { useState, type CSSProperties } from "react";
import "./App.css";

type Language = "en" | "he";

type Page =
  | "home"
  | "macroregion"
  | "principles"
  | "institutions"
  | "rights"
  | "projects"
  | "documents"
  | "consultation"
  | "contact";

const content = {
  en: {
    home: "Home",
    macroregion: "The Macroregion",
    principles: "Principles",
    institutions: "Institutions",
    rights: "Rights",
    projects: "Projects",
    documents: "Documents",
    consultation: "Consultation",
    contact: "Contact",
    eyebrow: "ONE DIASPORA. A COMMON VOICE.",
    title: "Transnational Macroregion of the Jewish Diaspora",
    subtitle:
      "For autonomous, pluralistic and cross-denominational representation of Diaspora Judaism.",
    discover: "Discover the project",
    manifesto: "Read the manifesto",
    justice: "Justice",
    justiceText: "Equal dignity and rights for every Jew, everywhere.",
    pluralism: "Pluralism",
    pluralismText: "One community, many traditions.",
    representation: "Representation",
    representationText:
      "An independent voice in European and international institutions.",
    shabbat: "Shabbat",
    shabbatText: "Protection of Sabbath rest and religious freedom.",
    aboutEyebrow: "THE MACROREGION",
    aboutTitle: "A project of the Diaspora, for the Diaspora.",
    aboutText1:
      "The Transnational Macroregion of the Jewish Diaspora seeks to give an autonomous, shared voice to a community living across different countries, cultures and traditions while sharing a common identity.",
    aboutText2:
      "It is not intended as a new religious denomination, but as a political and cultural space recognising the equal dignity of all Jewish currents: Orthodox, Masorti, Reform, Reconstructionist, Humanistic and secular.",
    mission: "Our mission",
    quote:
      "The Diaspora is not an absence, but a widespread presence. It is time to transform our plurality into a common strength.",
    quoteSource: "Project guiding idea",
    statusEyebrow: "AN INITIATIVE IN FORMATION",
    statusTitle: "A project in formation",
    statusText:
      "The Macroregion is currently an initiative in development. Its organisational form and instruments of representation will be shaped through a participatory and transparent process.",
    explore: "Explore our principles",
    footerLine: "Many voices. One community.",
    privacy: "Privacy",
    legal: "Legal notice",
    stage: "Initiative in formation",
    imageAlt: "A symbolic image representing the Jewish Diaspora",
    backHome: "Back to home",
    learnMore: "Explore this section",
    pageIntro: "Explore the vision, principles and proposed areas of work of the initiative.",
    pages: {
      macroregion: {
        eyebrow: "A SHARED TRANSNATIONAL SPACE",
        title: "The Macroregion",
        intro:
          "A framework for cooperation, dialogue and shared representation across the Jewish Diaspora.",
        sections: [
          {
            title: "A community across borders",
            text:
              "Jewish life extends across states, languages, cultures and different forms of religious and secular belonging. The Macroregion seeks to recognise this reality and create a space for cooperation that does not depend on a single national or denominational framework.",
          },
          {
            title: "Autonomy and pluralism",
            text:
              "The initiative aims to be autonomous from individual religious denominations and political parties. It seeks to bring different Jewish experiences into dialogue without erasing their differences.",
          },
          {
            title: "A transnational perspective",
            text:
              "The proposed macroregional dimension is intended to connect communities, associations and individuals across borders, while respecting existing institutions, local laws and the autonomy of participating organisations.",
          },
        ],
      },
      principles: {
        eyebrow: "FOUNDING VALUES",
        title: "Principles",
        intro:
          "The initiative is guided by equality, pluralism, democratic participation and respect for Jewish diversity.",
        sections: [
          {
            title: "Equal dignity",
            text:
              "Every person deserves equal dignity and protection from discrimination. Different Jewish identities and traditions should be treated with respect.",
          },
          {
            title: "Religious and cultural pluralism",
            text:
              "Orthodox, Masorti, Reform, Reconstructionist, Humanistic, secular and other Jewish perspectives should be able to participate without one tradition claiming exclusive authority over the whole community.",
          },
          {
            title: "Democratic participation",
            text:
              "Any future representative structure should be developed through transparent procedures, meaningful consultation and clear accountability.",
          },
          {
            title: "Freedom of conscience",
            text:
              "Religious practice, non-practice and individual conscience should be respected, within the framework of fundamental rights and applicable law.",
          },
          {
            title: "Solidarity and responsibility",
            text:
              "The initiative seeks to encourage mutual support, dialogue and responsibility among Jewish communities and with wider society.",
          },
        ],
      },
      institutions: {
        eyebrow: "A MODEL TO BE DEVELOPED",
        title: "Institutions",
        intro:
          "The institutional architecture has not yet been established. The following are possible areas for discussion, not existing bodies or powers.",
        sections: [
          {
            title: "A participatory assembly",
            text:
              "A future assembly could provide a forum for representatives of communities, associations and individual members, subject to rules developed through a transparent founding process.",
          },
          {
            title: "Coordination and working groups",
            text:
              "The initiative could establish thematic working groups on culture, education, religious freedom, social inclusion and international cooperation.",
          },
          {
            title: "Ethics and transparency",
            text:
              "Any future governance model should define conflicts of interest, decision-making procedures, financial transparency and mechanisms for accountability.",
          },
          {
            title: "A gradual founding process",
            text:
              "The institutional model would need to be discussed, documented and adopted through an agreed process before any body could claim a formal mandate to represent participants.",
          },
        ],
      },
      rights: {
        eyebrow: "DIGNITY, FREEDOM AND PARTICIPATION",
        title: "Rights",
        intro:
          "The initiative aims to promote the protection of Jewish life and equal participation in society, in accordance with fundamental rights and the law.",
        sections: [
          {
            title: "Freedom of religion and belief",
            text:
              "Protecting the right to practise, change, express or not practise a religion, subject to the protections and limits established by law.",
          },
          {
            title: "Protection against antisemitism",
            text:
              "Supporting education, public awareness, prevention and appropriate responses to antisemitism and discrimination against Jews.",
          },
          {
            title: "Cultural and communal life",
            text:
              "Promoting the ability of Jewish communities and individuals to maintain their cultural, linguistic, religious and educational life.",
          },
          {
            title: "Sabbath and religious observance",
            text:
              "Encouraging reasonable respect for Shabbat and other religious observances in public life, education and employment, consistently with applicable law.",
          },
          {
            title: "Equal access and inclusion",
            text:
              "Promoting participation and equal treatment while recognising the diversity of Jewish identities, family backgrounds and personal convictions.",
          },
        ],
      },
      projects: {
        eyebrow: "FROM PRINCIPLES TO ACTION",
        title: "Projects",
        intro:
          "Potential areas of work that could be developed in consultation with communities, associations and interested individuals.",
        sections: [
          {
            title: "Education and research",
            text:
              "Resources, seminars and collaborative research on Jewish history, contemporary Diaspora life, antisemitism and cultural diversity.",
          },
          {
            title: "Dialogue across traditions",
            text:
              "Meetings and initiatives that encourage dialogue between Jewish religious, cultural and secular perspectives.",
          },
          {
            title: "Rights and public policy",
            text:
              "Monitoring relevant policy developments, sharing information and preparing proposals on issues affecting Jewish life and religious freedom.",
          },
          {
            title: "Transnational cooperation",
            text:
              "Creating opportunities for communities, cultural organisations and individuals in different countries to exchange experience and develop joint initiatives.",
          },
          {
            title: "Shabbat and cultural life",
            text:
              "Exploring practical ways to support Jewish cultural continuity, religious observance and public understanding of Shabbat.",
          },
        ],
      },
      documents: {
        eyebrow: "FOUNDING MATERIALS",
        title: "Documents",
        intro:
          "This section will host the project's texts as they are prepared, reviewed and approved. Drafts will be clearly distinguished from adopted documents.",
        sections: [
          {
            title: "Founding manifesto",
            text:
              "A statement of purpose explaining the reasons for the initiative, its intended scope and the values that guide its development.",
          },
          {
            title: "Principles and charter",
            text:
              "A proposed framework describing the initiative's commitments, participation principles and approach to pluralism and accountability.",
          },
          {
            title: "Institutional proposals",
            text:
              "Discussion papers on possible governance arrangements, representation, decision-making and relations with existing organisations.",
          },
          {
            title: "Public consultations",
            text:
              "Future consultation materials and summaries of contributions, where publication is appropriate and participants' privacy is protected.",
          },
        ],
      },
      consultation: {
        eyebrow: "AN OPEN AND PARTICIPATORY PROCESS",
        title: "Public Consultation",
        intro: "The initiative is at a preliminary stage. This consultation is intended to collect questions, objections and proposals before any institutional model or representative mandate is adopted.",
        sections: [
          { title: "Who can contribute", text: "Jewish individuals, including those not affiliated with an established community, as well as communities, associations, researchers and other interested organisations may contribute." },
          { title: "Questions for discussion", text: "How should individual and collective participation work? What safeguards are needed for pluralism, transparency and accountability? Which issues should be prioritised? What relationship should the initiative maintain with existing Jewish organisations and with Israel?" },
          { title: "No mandate is implied", text: "Taking part in a consultation does not constitute membership, endorsement or authorisation to represent any person, community or organisation. The project does not currently claim to represent the Jewish Diaspora." },
          { title: "How to contribute", text: "Send written comments, questions or proposals to transnationaldiaspora@proton.me. Contributions should identify whether they may be quoted publicly; personal data should not be included unless necessary." },
        ],
      },
      contact: {
        eyebrow: "TAKE PART IN THE CONVERSATION",
        title: "Contact",
        intro:
          "The initiative is in development. Dialogue with interested individuals, communities, researchers and organisations can help clarify its purpose and possible future structure.",
        sections: [
          {
            title: "Express your interest",
            text:
              "You can contact the project to share questions, proposals, expressions of interest or feedback on the initiative's principles and future development.",
          },
          {
            title: "Community and organisational dialogue",
            text:
              "We welcome constructive dialogue with Jewish communities, cultural associations, academics and organisations interested in pluralism, rights and transnational cooperation.",
          },
          {
            title: "Before getting in touch",
            text:
              "Please note that the initiative is not yet a formally constituted representative institution. Contact does not imply membership, endorsement or formal affiliation.",
          },
        ],
      },
    },
  },
  he: {
    home: "ראשי",
    macroregion: "המקרו־אזור",
    principles: "עקרונות",
    institutions: "מוסדות",
    rights: "זכויות",
    projects: "מיזמים",
    documents: "מסמכים",
    consultation: "התייעצות ציבורית",
    contact: "יצירת קשר",
    eyebrow: "תפוצה אחת. קול משותף.",
    title: "המקרו־אזור הטרנס־לאומי של התפוצה היהודית",
    subtitle: "לייצוג אוטונומי, פלורליסטי ורב־זרמי של יהדות התפוצות.",
    discover: "הכירו את המיזם",
    manifesto: "קראו את המניפסט",
    justice: "צדק",
    justiceText: "כבוד וזכויות שווים לכל יהודי ויהודייה, בכל מקום.",
    pluralism: "פלורליזם",
    pluralismText: "קהילה אחת, מסורות רבות.",
    representation: "ייצוג",
    representationText: "קול עצמאי במוסדות אירופיים ובינלאומיים.",
    shabbat: "שבת",
    shabbatText: "הגנה על מנוחת השבת ועל חופש הדת.",
    aboutEyebrow: "המקרו־אזור",
    aboutTitle: "מיזם של התפוצה, למען התפוצה.",
    aboutText1:
      "המקרו־אזור הטרנס־לאומי של התפוצה היהודית מבקש להעניק קול משותף ועצמאי לקהילה החיה במדינות, בתרבויות ובמסורות שונות, תוך שיתוף זהות יהודית.",
    aboutText2:
      "אין מדובר בזרם דתי חדש, אלא במרחב פוליטי ותרבותי המבקש להכיר בכבודן השווה של מסורות יהודיות שונות: אורתודוקסיות, מסורתיות, רפורמיות, רקונסטרוקציוניסטיות, הומניסטיות וחילוניות.",
    mission: "החזון שלנו",
    quote: "התפוצה אינה היעדר, אלא נוכחות רחבת־היקף. הגיע הזמן להפוך את ריבוי הקולות שלנו לכוח משותף.",
    quoteSource: "הרעיון המנחה של המיזם",
    statusEyebrow: "מיזם בתהליך התהוות",
    statusTitle: "מיזם בתהליך התהוות",
    statusText:
      "המקרו־אזור נמצא כעת בשלבי פיתוח. מבנהו הארגוני וכלי הייצוג שלו יגובשו בתהליך משתף ושקוף.",
    explore: "לעקרונות המיזם",
    footerLine: "קולות רבים. קהילה אחת.",
    privacy: "פרטיות",
    legal: "מידע משפטי",
    stage: "מיזם בתהליך התהוות",
    imageAlt: "תמונה סמלית המייצגת את התפוצה היהודית",
    backHome: "חזרה לעמוד הראשי",
    learnMore: "לפרטים נוספים",
    pageIntro: "עיינו בחזון, בעקרונות ובתחומי הפעילות המוצעים של המיזם.",
    pages: {
      macroregion: {
        eyebrow: "מרחב טרנס־לאומי משותף",
        title: "המקרו־אזור",
        intro: "מסגרת לשיתוף פעולה, לדיאלוג ולייצוג משותף ברחבי התפוצה היהודית.",
        sections: [
          { title: "קהילה החוצה גבולות", text: "החיים היהודיים מתקיימים במדינות, בשפות, בתרבויות ובצורות שונות של השתייכות דתית וחילונית. המיזם מבקש להכיר במציאות זו וליצור מרחב לשיתוף פעולה שאינו מוגבל למסגרת לאומית או זרם דתי יחיד." },
          { title: "אוטונומיה ופלורליזם", text: "המיזם שואף לפעול באופן עצמאי מזרמים דתיים וממפלגות פוליטיות מסוימים, ולאפשר מפגש בין חוויות יהודיות שונות מבלי למחוק את ההבדלים ביניהן." },
          { title: "נקודת מבט טרנס־לאומית", text: "המסגרת המוצעת נועדה לחבר קהילות, עמותות ויחידים מעבר לגבולות, תוך כיבוד מוסדות קיימים, חוקים מקומיים ועצמאותם של הארגונים המשתתפים." },
        ],
      },
      principles: {
        eyebrow: "ערכי יסוד",
        title: "עקרונות",
        intro: "המיזם מונחה על ידי שוויון, פלורליזם, השתתפות דמוקרטית וכבוד למגוון היהודי.",
        sections: [
          { title: "כבוד שווה", text: "כל אדם זכאי לכבוד שווה ולהגנה מפני אפליה. יש להתייחס בכבוד לזהויות ולמסורות יהודיות שונות." },
          { title: "פלורליזם דתי ותרבותי", text: "נקודות מבט אורתודוקסיות, מסורתיות, רפורמיות, רקונסטרוקציוניסטיות, הומניסטיות וחילוניות יוכלו להשתתף מבלי שמסורת אחת תטען לסמכות בלעדית על הקהילה כולה." },
          { title: "השתתפות דמוקרטית", text: "כל מבנה ייצוגי עתידי צריך להתפתח באמצעות הליכים שקופים, התייעצות משמעותית ואחריותיות ברורה." },
          { title: "חופש המצפון", text: "יש לכבד קיום דתי, היעדר קיום דתי ומצפון אישי, בהתאם לזכויות היסוד ולדין החל." },
          { title: "סולידריות ואחריות", text: "המיזם מבקש לעודד תמיכה הדדית, דיאלוג ואחריות בין קהילות יהודיות ובינן לבין החברה הרחבה." },
        ],
      },
      institutions: {
        eyebrow: "מודל שטרם גובש",
        title: "מוסדות",
        intro: "המבנה המוסדי טרם הוקם. הנושאים הבאים הם אפשרויות לדיון ולא גופים או סמכויות קיימים.",
        sections: [
          { title: "אספה משתפת", text: "אספה עתידית עשויה לשמש מסגרת לנציגי קהילות, עמותות וחברים יחידים, בכפוף לכללים שיגובשו בתהליך ייסוד שקוף." },
          { title: "תיאום וקבוצות עבודה", text: "ניתן יהיה לבחון קבוצות עבודה בנושאי תרבות, חינוך, חופש דת, הכלה חברתית ושיתוף פעולה בינלאומי." },
          { title: "אתיקה ושקיפות", text: "כל מודל ממשל עתידי צריך להגדיר ניגודי עניינים, הליכי קבלת החלטות, שקיפות פיננסית ומנגנוני אחריותיות." },
          { title: "תהליך ייסוד הדרגתי", text: "יש לדון במודל המוסדי, לתעדו ולאמצו בהליך מוסכם לפני שגוף כלשהו יוכל לטעון למנדט רשמי לייצוג המשתתפים." },
        ],
      },
      rights: {
        eyebrow: "כבוד, חירות והשתתפות",
        title: "זכויות",
        intro: "המיזם מבקש לקדם את ההגנה על החיים היהודיים ואת ההשתתפות השווה בחברה, בהתאם לזכויות היסוד ולדין.",
        sections: [
          { title: "חופש דת ואמונה", text: "הגנה על הזכות לקיים דת, לשנות אמונה, להביע אותה או שלא לקיימה, בכפוף להגנות ולמגבלות הקבועות בחוק." },
          { title: "הגנה מפני אנטישמיות", text: "תמיכה בחינוך, בהעלאת מודעות ציבורית, במניעה ובתגובות הולמות לאנטישמיות ולאפליה נגד יהודים." },
          { title: "חיי תרבות וקהילה", text: "קידום יכולתן של קהילות ויחידים יהודים לקיים חיים תרבותיים, לשוניים, דתיים וחינוכיים." },
          { title: "שבת וקיום מצוות", text: "עידוד התחשבות ראויה בשבת ובמנהגים דתיים בחיים הציבוריים, בחינוך ובעבודה, בהתאם לדין החל." },
          { title: "גישה שווה והכלה", text: "קידום השתתפות ויחס שווה תוך הכרה במגוון הזהויות היהודיות, הרקעים המשפחתיים והאמונות האישיות." },
        ],
      },
      projects: {
        eyebrow: "מעקרונות לפעולה",
        title: "מיזמים",
        intro: "תחומי פעילות אפשריים שיפותחו בהתייעצות עם קהילות, עמותות ויחידים המעוניינים בכך.",
        sections: [
          { title: "חינוך ומחקר", text: "משאבים, סמינרים ומחקר משותף על ההיסטוריה היהודית, חיי התפוצה כיום, אנטישמיות ומגוון תרבותי." },
          { title: "דיאלוג בין מסורות", text: "מפגשים ויוזמות המעודדים דיאלוג בין נקודות מבט דתיות, תרבותיות וחילוניות ביהדות." },
          { title: "זכויות ומדיניות ציבורית", text: "מעקב אחר התפתחויות מדיניות רלוונטיות, שיתוף מידע וגיבוש הצעות בנושאים הנוגעים לחיים היהודיים ולחופש הדת." },
          { title: "שיתוף פעולה טרנס־לאומי", text: "יצירת הזדמנויות לקהילות, לארגוני תרבות וליחידים במדינות שונות לחלוק ניסיון ולפתח יוזמות משותפות." },
          { title: "שבת וחיי תרבות", text: "בחינת דרכים מעשיות לתמיכה ברציפות התרבות היהודית, בשמירת שבת ובהבנה הציבורית של משמעותה." },
        ],
      },
      documents: {
        eyebrow: "מסמכי יסוד",
        title: "מסמכים",
        intro: "במדור זה יפורסמו מסמכי המיזם לאחר הכנתם, בחינתם ואישורם. טיוטות יובחנו בבירור ממסמכים שאומצו.",
        sections: [
          { title: "מניפסט מייסד", text: "הצהרת מטרות המסבירה את הרקע למיזם, את היקפו המיועד ואת הערכים המנחים את פיתוחו." },
          { title: "עקרונות ואמנה", text: "מסגרת מוצעת המתארת את מחויבויות המיזם, את עקרונות ההשתתפות ואת גישתו לפלורליזם ולאחריותיות." },
          { title: "הצעות מוסדיות", text: "מסמכי דיון על הסדרי ממשל אפשריים, ייצוג, קבלת החלטות ויחסים עם ארגונים קיימים." },
          { title: "התייעצויות ציבוריות", text: "חומרי התייעצות עתידיים וסיכומי תגובות, ככל שפרסומם מתאים ותוך שמירה על פרטיות המשתתפים." },
        ],
      },
      consultation: {
        eyebrow: "תהליך פתוח ומשתף",
        title: "התייעצות ציבורית",
        intro: "המיזם נמצא בשלב ראשוני. מטרת ההתייעצות היא לאסוף שאלות, הסתייגויות והצעות לפני אימוץ מודל מוסדי או מנדט ייצוגי כלשהו.",
        sections: [
          { title: "מי יכול להשתתף", text: "יחידים יהודים, לרבות מי שאינם משתייכים לקהילה ממוסדת, וכן קהילות, עמותות, חוקרים וארגונים המעוניינים בכך, יכולים להעביר את עמדותיהם." },
          { title: "שאלות לדיון", text: "כיצד יש להסדיר השתתפות של יחידים ושל גופים? אילו ערבויות נדרשות לפלורליזם, לשקיפות ולאחריותיות? באילו נושאים יש להתמקד? כיצד על המיזם לקיים יחסים עם ארגונים יהודיים קיימים ועם ישראל?" },
          { title: "אין בכך הענקת מנדט", text: "השתתפות בהתייעצות אינה מקנה חברות, אינה מבטאת תמיכה ואינה מסמיכה לייצג אדם, קהילה או ארגון. המיזם אינו טוען כיום לייצוג התפוצה היהודית." },
          { title: "כיצד להעביר עמדה", text: "אפשר לשלוח הערות, שאלות או הצעות בכתב לכתובת transnationaldiaspora@proton.me. יש לציין אם ניתן לצטט את הדברים בפומבי; אין לכלול מידע אישי אלא אם הדבר נחוץ." },
        ],
      },
      contact: {
        eyebrow: "הצטרפו לשיחה",
        title: "יצירת קשר",
        intro: "המיזם נמצא בשלבי פיתוח. דיאלוג עם יחידים, קהילות, חוקרים וארגונים יכול לסייע בהבהרת מטרותיו ומבנהו העתידי.",
        sections: [
          { title: "הבעת עניין", text: "ניתן לפנות למיזם כדי לשתף שאלות, הצעות, הבעת עניין או משוב על עקרונותיו ועל המשך פיתוחו." },
          { title: "דיאלוג עם קהילות וארגונים", text: "אנו מעוניינים בדיאלוג בונה עם קהילות יהודיות, עמותות תרבות, אנשי אקדמיה וארגונים העוסקים בפלורליזם, בזכויות ובשיתוף פעולה טרנס־לאומי." },
          { title: "לפני הפנייה", text: "המיזם עדיין אינו מוסד ייצוגי שהתאגד באופן רשמי. פנייה אליו אינה מעידה על חברות, תמיכה או השתייכות רשמית." },
        ],
      },
    },
  },
};

type SectionContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; text: string }[];
};

function Emblem({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`emblem ${compact ? "emblem--compact" : ""}`}>
      <img
        src="/stellaeu.png"
        alt="Emblem of the Transnational Macroregion of the Jewish Diaspora"
        className="emblem__image"
      />
    </div>
  );
}

type IconType = "justice" | "pluralism" | "building" | "shabbat";

function Icon({ type }: { type: IconType }) {
  const common = {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (type === "justice") {
    return (
      <svg {...common}>
        <path d="M24 7v32M13 40h22M18 12h12M8 18h32" />
        <path d="m8 18-6 13h12L8 18ZM40 18l-6 13h12l-6-13Z" />
        <path d="M2 31c1 4 11 4 12 0M34 31c1 4 11 4 12 0" />
      </svg>
    );
  }

  if (type === "pluralism") {
    return (
      <svg {...common}>
        <circle cx="24" cy="12" r="5" />
        <circle cx="10" cy="19" r="4" />
        <circle cx="38" cy="19" r="4" />
        <path d="M14 37v-7a10 10 0 0 1 20 0v7M2 36v-5a8 8 0 0 1 10-8M46 36v-5a8 8 0 0 0-10-8M17 39h14" />
      </svg>
    );
  }

  if (type === "building") {
    return (
      <svg {...common}>
        <path d="M5 18 24 6l19 12H5ZM8 22h32M12 22v16M22 22v16M32 22v16M5 41h38" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="5" y="11" width="38" height="31" rx="2" />
      <path d="M5 19h38M14 6v10M34 6v10M17 28h14M17 34h14" />
      <path d="M34 28v10M39 28v10M32 38h9" />
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [page, setPage] = useState<Page>("home");

  const t = content[language];
  const isHebrew = language === "he";

  const navigation: { key: Page; label: string }[] = [
    { key: "home", label: t.home },
    { key: "macroregion", label: t.macroregion },
    { key: "principles", label: t.principles },
    { key: "institutions", label: t.institutions },
    { key: "rights", label: t.rights },
    { key: "projects", label: t.projects },
    { key: "documents", label: t.documents },
    { key: "consultation", label: t.consultation },
    { key: "contact", label: t.contact },
  ];

  const pageData =
    page === "home"
      ? null
      : (t.pages[page] as SectionContent);

  function navigate(nextPage: Page) {
    setPage(nextPage);
    window.history.replaceState(null, "", `#${nextPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.documentElement.dir = nextLanguage === "he" ? "rtl" : "ltr";
  }

  const cardStyle: CSSProperties = {
    padding: "1.5rem",
    border: "1px solid rgba(181, 145, 76, 0.3)",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.78)",
    boxSizing: "border-box",
  };

  const pageStyle: CSSProperties = {
    maxWidth: "1180px",
    width: "100%",
    margin: "0 auto",
    padding: "clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)",
    boxSizing: "border-box",
  };

  return (
    <div
      className={`site ${isHebrew ? "site--hebrew" : ""}`}
      dir={isHebrew ? "rtl" : "ltr"}
      lang={language}
    >
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Diaspora Macroregion home"
          onClick={(event) => {
            event.preventDefault();
            navigate("home");
          }}
        >
          <Emblem />
          <span className="brand__divider" />
          <span className="brand__text">
            <span className="brand__hebrew" lang="he" dir="rtl">
              תפוצות
            </span>
            <span className="brand__name">Transnational Macroregion</span>
            <span className="brand__name">of the Jewish Diaspora</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              className={page === item.key ? "active" : ""}
              href={`#${item.key}`}
              key={item.key}
              aria-current={page === item.key ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.key);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="languages" aria-label="Select language">
          <button
            className={language === "en" ? "language-active" : ""}
            onClick={() => changeLanguage("en")}
            aria-pressed={language === "en"}
            lang="en"
          >
            EN
          </button>
          <button
            className={language === "he" ? "language-active" : ""}
            onClick={() => changeLanguage("he")}
            aria-pressed={language === "he"}
            lang="he"
          >
            עברית
          </button>
        </div>
      </header>

      <main>
        {page === "home" ? (
          <>
            <section className="hero" id="home">
              <div className="hero__image" />
              <div className="hero__shade" />

              <div className="hero__content">
                <p className="eyebrow">{t.eyebrow}</p>
                <h1>{t.title}</h1>
                <p className="hero__subtitle">{t.subtitle}</p>

                <div className="hero__actions">
                  <a
                    className="button button--gold"
                    href="#macroregion"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("macroregion");
                    }}
                  >
                    {t.discover}
                  </a>
                  <a
                    className="button button--outline"
                    href="#documents"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("documents");
                    }}
                  >
                    {t.manifesto} <Arrow />
                  </a>
                </div>
              </div>

              <div className="hero__watermark" aria-hidden="true">
                <Emblem />
              </div>
            </section>

            <section className="principles-strip" id="principles">
              <article className="principle">
                <Icon type="justice" />
                <h2>{t.justice}</h2>
                <p>{t.justiceText}</p>
              </article>
              <article className="principle">
                <Icon type="pluralism" />
                <h2>{t.pluralism}</h2>
                <p>{t.pluralismText}</p>
              </article>
              <article className="principle">
                <Icon type="building" />
                <h2>{t.representation}</h2>
                <p>{t.representationText}</p>
              </article>
              <article className="principle">
                <Icon type="shabbat" />
                <h2>{t.shabbat}</h2>
                <p>{t.shabbatText}</p>
              </article>
            </section>

            <section className="about-section" id="macroregion">
              <div className="about-copy">
                <p className="section-eyebrow">{t.aboutEyebrow}</p>
                <h2>{t.aboutTitle}</h2>
                <p>{t.aboutText1}</p>
                <p>{t.aboutText2}</p>
                <button
                  className="button button--light"
                  onClick={() => navigate("principles")}
                >
                  {t.mission} <Arrow />
                </button>
              </div>

              <div
                className="about-photo"
                role="img"
                aria-label={t.imageAlt}
              >
                <span className="photo-caption" lang="he" dir="rtl">
                  תפוצות
                </span>
              </div>

              <blockquote className="project-quote">
                <p>“{t.quote}”</p>
                <cite>— {t.quoteSource}</cite>
              </blockquote>
            </section>

            <section className="manifesto-section">
              <div>
                <p className="section-eyebrow">{t.statusEyebrow}</p>
                <h2>{t.statusTitle}</h2>
                <p>{t.statusText}</p>
              </div>
              <button
                className="button button--gold"
                onClick={() => navigate("institutions")}
              >
                {t.explore}
              </button>
            </section>

            <section className="detail-links">
              {(["principles", "rights", "projects", "documents", "consultation"] as Page[]).map(
                (key, index) => (
                  <a
                    href={`#${key}`}
                    key={key}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(key);
                    }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{t[key]}</strong>
                    <Arrow />
                  </a>
                ),
              )}
            </section>
          </>
        ) : (
          <section style={pageStyle} className="content-page">
            <p className="section-eyebrow">{pageData?.eyebrow}</p>
            <h1
              style={{
                color: "#092746",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                lineHeight: 1.15,
                margin: "0 0 1.25rem",
              }}
            >
              {pageData?.title}
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.85,
                maxWidth: "850px",
                marginBottom: "2.5rem",
              }}
            >
              {pageData?.intro}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
                gap: "1.25rem",
              }}
            >
              {pageData?.sections.map((section, index) => (
                <article style={cardStyle} key={section.title}>
                  <span
                    style={{
                      display: "inline-block",
                      color: "#a47c35",
                      fontSize: ".8rem",
                      letterSpacing: ".12em",
                      marginBottom: ".8rem",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    style={{
                      color: "#092746",
                      fontSize: "1.3rem",
                      lineHeight: 1.4,
                      margin: "0 0 .75rem",
                    }}
                  >
                    {section.title}
                  </h2>
                  <p style={{ lineHeight: 1.85, margin: 0 }}>
                    {section.text}
                  </p>
                </article>
              ))}
            </div>

            {page === "documents" && (
              <div style={{ marginTop: "2.5rem" }}>
                <h2 style={{ color: "#092746", marginBottom: "1rem" }}>
                  {isHebrew ? "מסמכים מלאים להורדה" : "Full documents for download"}
                </h2>
                <p style={{ lineHeight: 1.8, maxWidth: "850px" }}>
                  {isHebrew
                    ? "המסמכים הבאים הם טיוטות פתוחות להתייעצות. הם אינם מסמכים שאומצו על ידי מוסד מייצג, שכן מוסד כזה טרם הוקם."
                    : "The following documents are drafts open for consultation. They have not been adopted by a representative institution, which has not yet been established."}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1rem", marginTop: "1.25rem" }}>
                  <a href="/documents/manifesto-en.pdf" target="_blank" rel="noreferrer" style={{ ...cardStyle, display: "block", color: "#092746", textDecoration: "none" }}>
                    <strong>{isHebrew ? "המניפסט המייסד — אנגלית" : "Founding Manifesto — English"}</strong>
                    <p style={{ lineHeight: 1.7 }}>{isHebrew ? "טיוטה להתייעצות ציבורית" : "Draft for public consultation"} · PDF</p>
                  </a>
                  <a href="/documents/manifesto-he.pdf" target="_blank" rel="noreferrer" style={{ ...cardStyle, display: "block", color: "#092746", textDecoration: "none" }}>
                    <strong>{isHebrew ? "המניפסט המייסד — עברית" : "Founding Manifesto — Hebrew"}</strong>
                    <p style={{ lineHeight: 1.7 }}>{isHebrew ? "טיוטה להתייעצות ציבורית" : "Draft for public consultation"} · PDF</p>
                  </a>
                  <a href="/documents/institutional-framework-en.pdf" target="_blank" rel="noreferrer" style={{ ...cardStyle, display: "block", color: "#092746", textDecoration: "none" }}>
                    <strong>{isHebrew ? "מסמך הכוונה מוסדי — אנגלית" : "Institutional Framework — English"}</strong>
                    <p style={{ lineHeight: 1.7 }}>{isHebrew ? "גרסה 1.0 · טיוטה להתייעצות" : "Version 1.0 · Draft for consultation"} · PDF</p>
                  </a>
                  <a href="/documents/institutional-framework-he.pdf" target="_blank" rel="noreferrer" style={{ ...cardStyle, display: "block", color: "#092746", textDecoration: "none" }}>
                    <strong>{isHebrew ? "מסמך הכוונה מוסדי — עברית" : "Institutional Framework — Hebrew"}</strong>
                    <p style={{ lineHeight: 1.7 }}>{isHebrew ? "גרסה 1.0 · טיוטה להתייעצות" : "Version 1.0 · Draft for consultation"} · PDF</p>
                  </a>
                </div>
              </div>
            )}

            {page === "contact" && (
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  borderLeft: isHebrew ? "none" : "3px solid #b5914c",
                  borderRight: isHebrew ? "3px solid #b5914c" : "none",
                  background: "rgba(181,145,76,0.09)",
                  lineHeight: 1.8,
                }}
              >
                <strong>{isHebrew ? "דוא״ל" : "Email"}: </strong>
                <a href="mailto:transnationaldiaspora@proton.me">
                  transnationaldiaspora@proton.me
                </a>
                <p style={{ marginBottom: 0, opacity: 0.8 }}>
                  {isHebrew
                    ? "לפניות כלליות, שאלות והצעות בנוגע למיזם."
                    : "For general enquiries, questions and proposals about the initiative."}
                </p>
              </div>
            )}

            <button
              className="button button--gold"
              style={{ marginTop: "2.5rem", cursor: "pointer" }}
              onClick={() => navigate("home")}
            >
              {t.backHome}
            </button>
          </section>
        )}
      </main>

      <footer className="site-footer" id="contact">
        <a
          className="footer-brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            navigate("home");
          }}
        >
          <Emblem compact />
          <span className="footer-brand__text">
            <span className="footer-brand__hebrew" lang="he" dir="rtl">
              תפוצות
            </span>
            <span className="footer-brand__name">
              Transnational Macroregion
              <br />
              of the Jewish Diaspora
            </span>
          </span>
        </a>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              navigate("home");
            }}
          >
            {t.home}
          </a>
          <a
            href="#documents"
            onClick={(event) => {
              event.preventDefault();
              navigate("documents");
            }}
          >
            {t.documents}
          </a>
          <a
            href="#consultation"
            onClick={(event) => {
              event.preventDefault();
              navigate("consultation");
            }}
          >
            {t.consultation}
          </a>
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              navigate("contact");
            }}
          >
            {t.contact}
          </a>
        </nav>

        <p className="footer-slogan">
          {t.footerLine}
          <span aria-hidden="true" className="footer-star">
            ✡
          </span>
        </p>
      </footer>
    </div>
  );
}
