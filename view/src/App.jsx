import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingPage, LandingPagesLayout, Home } from "./pages";
import "/asz.jpg"; // Make sure the image path is correct
import "./App.css";

function App() {
  const loading = false;

  useEffect(() => {
    // Check if the Telegram WebApp API is available
    if (window.Telegram && window.Telegram.WebApp) {
      // Request the expanded presentation style
      window.Telegram.WebApp.expand();
    }
  }, []);

  

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className=" h-[100vh] max-h-screen w-[100vw] max-w-96 m-auto">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPagesLayout />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
