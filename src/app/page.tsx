'use client'
import Home from './pages/index'
import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Page() {
    return (
        <>
            <Home/>
            <Analytics/> 
            <SpeedInsights />
        </>


    );
} 