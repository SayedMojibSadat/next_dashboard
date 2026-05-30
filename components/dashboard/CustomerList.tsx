"use client"

import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function CustomerList() {
    const customers = [
        {
            id: 1,
            name: "Danny Liu",
            email: "danny@example.com",
            avatar: "",
            deals: 1023,
            value: "$37,431"
        },
        {
            id: 2,
            name: "Bella Douvant",
            email: "bella@example.com",
            avatar: "",
            deals: 963,
            value: "$30,423"
        },
        {
            id: 3,
            name: "Daniel Blueward",
            email: "daniel@example.com",
            avatar: "",
            deals: 843,
            value: "$36,640"
        }
    ]

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Customer list</h3>
                <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="text-left py-3 px-2 text-slate-400 text-xs font-medium uppercase">Name</th>
                            <th className="text-left py-3 px-2 text-slate-400 text-xs font-medium uppercase">Deals</th>
                            <th className="text-left py-3 px-2 text-slate-400 text-xs font-medium uppercase">Total Deal Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                                <td className="py-4 px-2">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={customer.avatar} alt={customer.name} />
                                            <AvatarFallback>{customer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-white text-sm font-medium">{customer.name}</p>
                                            <p className="text-slate-400 text-xs">{customer.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-2 text-white text-sm">{customer.deals}</td>
                                <td className="py-4 px-2 text-white text-sm font-medium">{customer.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
