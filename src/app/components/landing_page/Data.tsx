import {
  FaceSmileIcon,
  LifebuoyIcon,
  LinkIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../../../public/img/section1.png";
import benefitTwoImg from "../../../../public/img/section2.png";

const benefitOne = {
  title: "Connecter son portefeuille",
  desc: "Connectez-vous facilement à votre portefeuille et accédez à toutes vos ressources financières en un seul endroit. Gérez vos investissements, suivez vos transactions et visualisez vos avoirs en toute simplicité.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Facilité de Connexion",
      desc: "Accédez rapidement à votre portefeuille sans tracas, vous permettant de rester informé sur vos finances à tout moment.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Gestion Simplifiée",
      desc: "Effectuez facilement des opérations sur votre portefeuille, que ce soit pour acheter, vendre ou surveiller vos investissements.",
      icon: <LifebuoyIcon />,
    },
    {
      title: "Suivi en Temps Réel",
      desc: "Restez informé sur l'évolution de vos avoirs grâce à des mises à jour en temps réel sur vos transactions et performances financières.",
      icon: <LinkIcon />,
    },
  ],
}

const benefitTwo = {
  title: "Convertir ETH/EUR",
  desc: "Trouvez des conseils, un soutien et une expertise pour convertir vos actifs ETH en EUR auprès de mentors expérimentés. Connectez-vous avec des mentors qui partagent vos intérêts et aspirations, favorisant des relations précieuses et des opportunités d'apprentissage.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Guidance d'Expert",
      desc: "Accédez à des conseils d'experts et des conseils de mentors expérimentés qui peuvent offrir des perspectives et des informations précieuses pour la conversion ETH/EUR.",
      icon: <TrophyIcon />,
    },
    {
      title: "Soutien Personnalisé",
      desc: "Recevez un soutien personnalisé adapté à vos objectifs, défis et aspirations pour faciliter la conversion de vos actifs ETH en EUR.",
      icon: <QuestionMarkCircleIcon />,
    },
    {
      title: "Opportunités de Réseautage",
      desc: "Élargissez votre réseau et connectez-vous avec des mentors qui peuvent vous aider à trouver des opportunités, des ressources et des connexions précieuses pour la conversion de vos actifs.",
      icon: <UsersIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
