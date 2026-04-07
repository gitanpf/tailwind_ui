import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="flex items-center gap-3 p-2">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="h-10 w-10 rounded-full"
            alt="Imagem de perfil"/>
            <div className="flex flex-1 flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">
                    Anelise Pedroso Fernandes
                </span>
                <span className="truncate text-sm text-zinc-500">
                    contato.anpf@gmail.com
                </span>
            </div>
            <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md ">
                <LogOut className="w-5 h-5 text-zinc-500" />
            </button>
        </div>
    )
}