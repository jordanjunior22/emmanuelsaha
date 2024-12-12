'use client'
import { useState ,useEffect} from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  useEffect(() => {
    // Initialize Facebook Pixel
    !function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1230240051439246'); // Replace with your Pixel ID
    fbq('track', 'PageView');
  }, []);

  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.fbq('track', 'Whatsapp Lead'); // You can customize the event name as needed
    }
  };
  const books = [
    {
      title: `GUIDE PRATIQUE DES PENSIONS DE RETRAITE DANS L'ADMINISTRATION CAMEROUNAISE`,
      image: "/book3.jpg",
      whatsappLink: "https://wa.me/+237665914045?text=Je suis intéressé par le Livre Trois",
      summary: `Motivé par une longue carrière de plus de trois décennies dans l’environnement des Pensions de retraite et des Rentes viagères au sein du Ministère de l’Economie et Finances et du Ministère en charge des Finances, il s’est imposé à notre esprit de laisser le fruit de notre expérience aux jeunes générations à travers un ouvrage intitulé :«Guide Pratique des Pensions de Retraite dans l’Administration camerounaise » paru en 2002.
      Cette édition revue et actualisée l’arrime aux nouvelles directives.
      Elle fait revivre dans sa première partie quelques moments phares du Ministère en charge des Finances.
      - La seconde partie traite de l’ignorance des textes comme source des déboires de l’Agent public et de ses ayants droit. 
      - La troisième partie se concentre sur la constitution des droits à pension.
      - La quatrième partie fait revivre à des fins de recherche ou historiques certaines prestations disparues ou en voie de disparition.
      En annexe, sont publiés entre autres les fiches de référence relatives à la vérification des dossiers soumis au visa de la hiérarchie, quelques textes réglementaires, et la procédure en matière de pension de retraite.`,
      price: '10,000 XAF', 
    },
    {
      title: "REGULARISATION SALARIALE ET REFLEXE D'ACHIVISTE",
      image: "/book1.jpg",
      whatsappLink: "https://wa.me/+237665914045?text=Je suis intéressé par le Livre Un",
      summary: `Permettez-moi de vous présenter cette publication de 274 pages, "Régularisation salariale et Réflexe d'Archiviste", parue en octobre 2008. Cette œuvre éclaire de nombreux sujets, notamment les Certificats Administratifs et les États des Sommes Dues, qui sont des techniques utilisées par l'Administration des Finances. Ces méthodes servent soit à recouvrer les fonds dus par les usagers, soit à clarifier leur situation financière en fournissant des éléments de réponse.
      L'ouvrage prodigue également des conseils essentiels concernant le Réflexe d'Archiviste, qui nous permet de nous prémunir contre des événements malheureux tels que les accidents, les incendies ou les catastrophes. En ces circonstances où nous disposons de très peu de temps pour prendre des affaires avant de quitter les lieux, le Réflexe d'Archiviste nous aide à identifier et rassembler l'essentiel de nos documents importants.
      En somme, cette œuvre offre une meilleure compréhension des aspects financiers et administratifs liés à la régularisation salariale, tout en soulignant l'importance du Réflexe d'Archiviste pour protéger nos documents essentiels lors de circonstances critiques.`,
      price: '10,000 XAF', 
    },
    {
      title: `GUIDE PRATIQUE DES PENSIONS DE RETRAITE DANS L'ADMINISTRATION CAMEROOUNAISE`,
      image: "/book2.jpg",
      whatsappLink: "https://wa.me/+237665914045?text=Je suis intéressé par le Livre Deux",
      summary: `La première  édition du Guide Pratique des Pensions de retraite dans l'Administration camerounaise reste actuelle: Les notions de pension d'auteurs de droit ou d'ayants droit  à savoir: la pension de retraite, la pension de réversion de veuves, la pension temporaire d'orphelins, les allocations familiales, le capital décès, la retraite par anticipation et les avantages y  afférents, bref, les informations pratiques et les modalités de calcul n'ont pas changé du fait de la non évolution notable  de la législation en la matière.L'édition revue et actualisée nous livre certains secrets dont l'avant goût est ressorti dans la note de l'auteur.`,
      unique : `(Edition revue et actualisée)`,
      price: '12,500 XAF', 
    },

  ];

  const openModal = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="bg-gradient-to-r from-black to-purple-500 min-h-screen p-5 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-10">
          <Image
            src="/emma.jpg"
            alt="Auteur"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-white"
          />
          <h1 className="text-3xl font-bold mt-4">Emmanuel SAHA</h1>
          <p className="text-gray-200 mt-2">
            Ceci est une courte biographie de l'auteur. Ici, vous pouvez décrire son parcours, ses réalisations et ses intérêts.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-1">Livres</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {books.map((book, index) => (
              <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black text-xs">{book.title}</h3>
                  <p className='text-black'>{book.unique}</p>
                  <p className="text-green-500 font-bold">{book.price}</p> 
                  <div className='flex flex-col md:flex-row'>

                  </div>
                  <a
                    href={book.whatsappLink}
                    target="_blank"
                    onClick={trackWhatsAppClick}
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                  >
                    <FaWhatsapp className="mr-2" />
                    Acheter
                  </a>
                </div>
                <button
                    onClick={() => openModal(book)}
                    className="text-blue-500 hover:underline"
                  >
                    Résumé
                  </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-semibold mb-4">Suivez-moi</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100094088863230" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094088863230" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094088863230" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>

      {/* Modal personnalisé pour le résumé du livre */}
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-5 rounded shadow-md max-w-md w-full text-black">
            <h2 className="text-xl font-bold mb-2">{selectedBook?.title}</h2>
            <p>{selectedBook?.summary}</p>
            <button onClick={closeModal} className="mt-4 text-red-500 hover:underline">
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
