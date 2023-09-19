
import './App.css';

import {Routes, Route} from 'react-router-dom';
import HotelsPage from './pages/HotelsPage.js';
import PackagesPage from './pages/PackagesPage.js';
import HomePage from './pages/HomePage';
import Layot from './components/Layot/Layout';
import SinglePackage from './components/Packages/SinglePackages.js';

function App() {

  const packages =[
    { 
      id: 1,
      title: "The Bund,",
      bold: "Shanghai",
      text: "China’s most international city",
      fullText: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
      price: "$598",
      image: "1",
      bestOffer: 0
    },
    { 
      id: 2,
      title: "Sydney Opera House,",
      bold: "Sydney",
      text: "Take a stroll along the famous harbor",
      fullText: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
      price: "$981",
      image: "2",
      bestOffer: 0
    },
    { 
      id: 3,
      title: "Kōdaiji Temple,",
      bold: "Kyoto",
      text: "Step back in time in the Gion district",
      fullText: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
      price: "$633",
      image: "3",
      bestOffer: 0
    },
    { 
      id: 4,
      title: "Tsavo East National Park,",
      bold: "Kenya",
      text: "Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.",
      fullText: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
      price: "$1,248",
      image: "4",
      bestOffer: 1
    }
  ]

  const hotels =[
    { 
      id: 'h1',
      title: "Stay among the atolls in",
      bold: "Maldives",
      text: "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
      image: "5",
    },
    { 
      id: 'h2',
      title: "Experience the Ourika Valley in",
      bold: "Morroko",
      text: "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
      image: "6",
    },
    { 
      id: 'h3',
      title: "Live traditionally in",
      bold: "Mongolia",
      text: "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
      image: "7",
    },
  ]

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layot/>}>
          <Route index element={<HomePage packages={packages} hotels ={hotels}/>} />
          <Route path='hotels' element={<HotelsPage hotels ={hotels}/>} />
          <Route path='packages' element={<PackagesPage packages={packages}/>} />
          <Route path='packages/:id' element={<SinglePackage packages={packages}/>} /> 
          </Route>
      </Routes>
    </div>
  );
}

export default App;
