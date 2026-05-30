
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ProfileProps = {
    profileData: {
        userName: string
        userImage: string
        imageName: string
    }
}

export function Profile({
    profileData,
}: ProfileProps) {

    const fallbackName =
        profileData.userName
            .split(" ")[0][0]
            .toUpperCase() +
        profileData.userName
            .split(" ")[1][0]
            .toUpperCase()

    return (
        <div className="flex items-center gap-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar className="size-9">
                            <AvatarImage
                                src={profileData.userImage}
                                alt={profileData.imageName}
                            />
                            <AvatarFallback className="bg-emerald-600 text-white">
                                {fallbackName}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 bg-slate-800 ">
                    <DropdownMenuGroup className="text-white">
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator className="bg-neutral-700" />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="hover:bg-[#ff626a24] text-[#ff626a]" variant="destructive">Log out</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <h4 className="text-lg text-white">
                {profileData.userName}
            </h4>

        </div>
    )
}
