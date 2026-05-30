import { Bell, Activity, Users, MessageSquare } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function RightSidebar() {
    const notifications = [
        {
            id: 1,
            type: "registered",
            title: "54 New users registered",
            icon: Users,
            color: "bg-emerald-500"
        },
        {
            id: 2,
            type: "placed",
            title: "123 Orders placed",
            icon: MessageSquare,
            color: "bg-blue-500"
        },
        {
            id: 3,
            type: "messages",
            title: "5 Unread messages",
            icon: MessageSquare,
            color: "bg-purple-500"
        }
    ]

    const activities = [
        { id: 1, title: "Changed status", description: "Changed Order Status", icon: Activity },
        { id: 2, title: "977 New products added", icon: Activity },
        { id: 3, title: "19 Products have been removed", icon: Activity }
    ]

    const contacts = [
        { id: 1, name: "Daniel Brady", avatar: "", status: "online" },
        { id: 2, name: "Karen Satterfield", avatar: "", status: "online" },
        { id: 3, name: "Elizabeth Hayes", avatar: "", status: "away" },
        { id: 4, name: "Felicia Rempel", avatar: "", status: "away" }
    ]

    return (
        <div className="w-80 bg-slate-950 border-l border-slate-800 p-6 overflow-y-auto">
            {/* Notifications Header */}
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
            </h2>

            {/* Notifications List */}
            <div className="space-y-3 mb-8">
                {notifications.map((notification) => {
                    const IconComponent = notification.icon
                    return (
                        <div key={notification.id} className="flex items-start gap-3">
                            <div className={`${notification.color} p-2 rounded-full flex-shrink-0`}>
                                <IconComponent className="h-3 w-3 text-white" />
                            </div>
                            <p className="text-slate-300 text-sm">{notification.title}</p>
                        </div>
                    )
                })}
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800 mb-6"></div>

            {/* Activities Header */}
            <h3 className="text-white font-semibold mb-4">Activities</h3>

            {/* Activities List */}
            <div className="space-y-3 mb-8">
                {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-2">
                        <Activity className="h-3 w-3 text-emerald-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-300 text-xs">{activity.title}</p>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800 mb-6"></div>

            {/* Contacts Header */}
            <h3 className="text-white font-semibold mb-4">Contacts of your managers</h3>

            {/* Contacts List */}
            <div className="space-y-3">
                {contacts.map((contact) => (
                    <div key={contact.id} className="flex items-center gap-3">
                        <div className="relative">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={contact.avatar} alt={contact.name} />
                                <AvatarFallback>{contact.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                            </Avatar>
                            <div className={`absolute bottom-0 right-0 h-2 w-2 rounded-full ${contact.status === 'online' ? 'bg-emerald-500' : 'bg-slate-500'}`}></div>
                        </div>
                        <div className="flex-1">
                            <p className="text-white text-xs font-medium">{contact.name}</p>
                            <p className="text-slate-400 text-xs capitalize">{contact.status}</p>
                        </div>
                        <button className="text-slate-400 hover:text-white">
                            <MessageSquare className="h-3 w-3" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
