//main home


import React from 'react'
import { HeroSec } from '../HeroSec/HeroSec'
import { SmsSol } from '../SMSSolutions/SmsSol'
import { WhatsApp } from '../WhatsApp/WhatsApp'
export function Home() {
    return (
        <div>
            <HeroSec />
            <SmsSol />
            <WhatsApp />
        </div>
    )
}
