'use client'
import Home from './pages/index'
import { initGA, logPageView } from '../app/utils/analytics';
import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Page() {

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }, []);
    return (
        <>
            <Home/>
            <Analytics/> 
            <SpeedInsights />
        </>


    );
} 