"use client"

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Image from 'next/image';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "./style.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const contributors = [
  {
    name: "Baptiste Vidal",
    github: "LeBaptouBaptiste",
    role: "Chef d'équipe",
    avatar: "https://github.com/LeBaptouBaptiste.png",
  },
  {
    name: "Maxime Baude",
    github: "MaximeCode",
    role: "Développeur Quizz",
    avatar: "https://github.com/MaximeCode.png",
  },
  {
    name: "Noa Guignolle",
    github: "NoaKorogu",
    role: "Développeur Captcha",
    avatar: "https://github.com/NoaKorogu.png",
  },
  {
    name: "Killiann Oddo",
    github: "KAN3KO",
    role: "Développeur Clicker",
    avatar: "https://github.com/KAN3KO.png",
  },
];

// Définition d'un type avec les clés spécifiques (pour les contributeurs existants)
interface ContributionCounts {
  LeBaptouBaptiste: number;
  MaximeCode: number;
  NoaKorogu: number;
  KAN3KO: number;
}

export default function CreditPage() {
  const [theme, setTheme] = useState('light');
  const [contributionCounts, setContributionCounts] = useState<ContributionCounts>({
    LeBaptouBaptiste: 0,
    MaximeCode: 0,
    NoaKorogu: 0,
    KAN3KO: 0,
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const fetchContributions = async () => {
    const repo = 'votreNomUtilisateur/votreRepo'; // Remplacez par votre repo GitHub
    const result: ContributionCounts = {
      LeBaptouBaptiste: 0,
      MaximeCode: 0,
      NoaKorogu: 0,
      KAN3KO: 0,
    };

    try {
      const response = await fetch(`https://api.github.com/repos/${repo}/contributors`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur API : ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Réponse de l\'API GitHub:', data);

      if (Array.isArray(data)) {
        for (let contributor of contributors) {
          const contributorData = data.find(user => user.login === contributor.github);
          result[contributor.github as keyof ContributionCounts] = contributorData ? contributorData.contributions : 0;
        }
      } else {
        console.error('La réponse de l\'API GitHub n\'est pas un tableau', data);
      }

    } catch (error) {
      console.error('Erreur lors de la récupération des données GitHub:', error);
    }

    setContributionCounts(result); // Met à jour l'état avec les contributions
  };

  useEffect(() => {
    fetchContributions(); // Appeler la fonction fetch lors du montage du composant
  }, []);

  // Préparer les données pour le graphique
  const data = {
    labels: contributors.map((contributor) => contributor.name),
    datasets: [
      {
        label: 'Nombre de contributions',
        data: [
          contributionCounts.LeBaptouBaptiste,
          contributionCounts.MaximeCode,
          contributionCounts.NoaKorogu,
          contributionCounts.KAN3KO,
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`${theme} min-h-screen bg-gray-100 dark:bg-gray-800`}>
      {/* Header */}
      <header className="p-6 bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md">
        <h1 className="text-4xl font-bold">Page Crédit</h1>
        <p className="text-lg">Un hommage à nos contributeurs.</p>
        <button
          className="mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-white"
          onClick={toggleTheme}
        >
          Basculer en mode {theme === 'light' ? 'sombre' : 'clair'}
        </button>
      </header>

      {/* Contributors Section */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contributors.map((contributor) => (
          <div
            key={contributor.github}
            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            <Image
              src={contributor.avatar}
              alt={contributor.name}
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold text-center mt-4 dark:text-white">
              {contributor.name}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              {contributor.role}
            </p>
            <a
              href={`https://github.com/${contributor.github}`}
              target="_blank"
              className="block mt-4 text-center text-blue-500 dark:text-blue-300 hover:underline"
            >
              Voir le profil GitHub
            </a>
          </div>
        ))}
      </section>

      {/* Contribution Chart */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center dark:text-white">
          Graphique des Contributions
        </h2>
        <div className="mt-8">
          <Bar data={data} />
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-center">
        © 2024, Projet de l'équipe
      </footer>
    </div>
  );
}