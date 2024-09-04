'use client'

import { useState } from "react"
import Image from "next/image"

const tabData = [
    {
        title: "Dashboard",
        description: "Get an overview of your account",
        image: "/placeholder.svg?height=400&width=600"
    },
    {
        title: "Analytics",
        description: "View detailed statistics and reports",
        image: "/placeholder.svg?height=400&width=600"
    },
    {
        title: "Settings",
        description: "Manage your account preferences",
        image: "/placeholder.svg?height=400&width=600"
    },
    {
        title: "Support",
        description: "Get help and contact customer service",
        image: "/placeholder.svg?height=400&width=600"
    }
]

export default function Features() {
    const [activeTab, setActiveTab] = useState(tabData[0])

    return (
        <div className="flex h-[600px] w-full w-full overflow-hidden rounded-lg border bg-white shadow">
            <div className="w-1/3 border-r">
                {tabData.map((tab) => (
                    <button
                        key={tab.title}
                        onClick={() => setActiveTab(tab)}
                        className={`flex w-full flex-col items-start justify-start px-4 py-6 text-left transition-colors ${
                            activeTab.title === tab.title
                                ? "bg-gray-100 text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                        <span className="text-lg font-semibold">{tab.title}</span>
                        <span className="text-sm text-gray-500">{tab.description}</span>
                    </button>
                ))}
            </div>
            <div className="flex w-2/3 flex-col items-center justify-center p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">{activeTab.title}</h2>
                <Image
                    src={activeTab.image}
                    alt={`${activeTab.title} illustration`}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                />
            </div>
        </div>
    )
}