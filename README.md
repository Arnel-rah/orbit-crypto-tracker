# 🪐 Orbit Crypto Tracker

> Suivez les cryptomonnaies en temps réel — prix, variations et favoris, le tout dans une interface claire et réactive.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![CoinGecko API](https://img.shields.io/badge/API-CoinGecko-8DC63F?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## ✨ Fonctionnalités

- 📈 **Prix en temps réel** — données récupérées depuis l'API CoinGecko
- 🔄 **Rafraîchissement automatique** toutes les 60 secondes
- ❤️ **Watchlist personnelle** — sauvegarde des favoris via `localStorage`
- 🎨 **Variations colorées** — badges verts/rouges selon la hausse ou la baisse
- 💱 **Formatage monétaire** — affichage localisé (ex : `1 200,00 $`)
- 📱 **Interface responsive** avec Navbar intégrée

---

## 📁 Structure du projet

```
src/
├── api/
│   └── cryptoApi.ts          # Appels vers l'API CoinGecko
├── components/
│   ├── ui/
│   │   ├── Button.tsx         # Bouton réutilisable
│   │   └── Badge.tsx          # Affiche +5.2% (vert) ou -2.1% (rouge)
│   ├── layout/
│   │   └── Navbar.tsx         # Logo + lien vers les Favoris
│   └── crypto/
│       ├── CryptoRow.tsx      # Ligne dans le tableau des cryptos
│       └── StatCard.tsx       # Carte avec le prix mis en avant
├── hooks/
│   ├── useCrypto.ts           # Fetch + auto-refresh toutes les 60s
│   └── useWatchlist.ts        # Gestion des favoris (localStorage)
├── pages/
│   ├── Home.tsx               # Liste complète des cryptomonnaies
│   └── Watchlist.tsx          # Uniquement les favoris
└── utils/
    └── formatCurrency.ts      # Transforme 1200 en "1 200,00 $"
```

---

## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) v18+
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/Arnel-rah/orbit-crypto-tracker.git
cd orbit-crypto-tracker

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173).

---

## 🔌 API

Orbit utilise l'[API publique CoinGecko](https://www.coingecko.com/en/api) (sans clé requise pour un usage basique).

```
Base URL : https://api.coingecko.com/api/v3
```

Les appels sont centralisés dans `src/api/cryptoApi.ts` et consommés via le hook `useCrypto`.

> **Limite de taux** : l'API gratuite est limitée à ~10-30 requêtes/minute. Le rafraîchissement toutes les 60s reste dans ces limites.

---

## 🧩 Composants clés

| Composant | Rôle |
|---|---|
| `StatCard` | Affiche le prix actuel d'une crypto en grand format |
| `CryptoRow` | Ligne de tableau avec nom, prix et variation |
| `Badge` | Pastille colorée pour les pourcentages de variation |
| `Navbar` | Navigation principale avec accès rapide à la Watchlist |

---

## 🪝 Hooks

### `useCrypto`
Gère la récupération des données et le rafraîchissement automatique.

```ts
const { cryptos, isLoading, error } = useCrypto();
```

### `useWatchlist`
Persiste les favoris dans le `localStorage` du navigateur.

```ts
const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
```

---

## 🛠️ Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | Vérification du code |

---

## 📄 Licence

Distribué sous licence **MIT**. Voir le fichier `LICENSE` pour plus d'informations.

---

<p align="center">
  Fait avec ☕ et TypeScript · Données fournies par <a href="https://www.coingecko.com">CoinGecko</a>
</p>