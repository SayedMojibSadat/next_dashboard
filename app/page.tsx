"use client"

import React from 'react'
import AppHeader from "@/components/header/app-header"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { SalesOverview } from "@/components/dashboard/SalesOverview"
import { TotalProfit } from "@/components/dashboard/TotalProfit"
import { CustomerList } from "@/components/dashboard/CustomerList"
import { PremiumPlan } from "@/components/dashboard/PremiumPlan"
import { RightSidebar } from "@/components/dashboard/RightSidebar"

function page() {
  return (
    <>
      <AppHeader />

      <div className='flex flex-1 overflow-hidden bg-slate-950'>
        {/* Main Content */}
        <div className='flex-1 overflow-y-auto p-6'>
          {/* Stats Cards Row */}
          <div className='grid grid-cols-4 gap-4 mb-6'>
            <StatsCard
              title="Net revenue"
              value="$3,131,021"
              trend={0.68}
              trendUp={true}
            />
            <StatsCard
              title="APR"
              value="$1,511,121"
              trend={2.5}
              trendUp={true}
            />
            <StatsCard
              title="Quarterly revenue goal"
              value="71%"
              trend={11}
              trendUp={true}
            />
            <StatsCard
              title="New orders"
              value="18,221"
              trend={11}
              trendUp={true}
            />
          </div>

          {/* Main Charts Row */}
          <div className='grid grid-cols-3 gap-6 mb-6'>
            <div className='col-span-2'>
              <SalesOverview />
            </div>
            <div>
              <TotalProfit />
            </div>
          </div>

          {/* Bottom Row */}
          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2'>
              <CustomerList />
            </div>
            <div>
              <PremiumPlan />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </>
  )
}

export default page