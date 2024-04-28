--------------------------------------------------
-- 🐌  Author   : ATHENS STUDIO
-- 💬  Discord  : https://discord.gg/6fFSqbtxGV
--------------------------------------------------
fx_version 'cerulean'
games { 'gta5' }
author 'pk.tkh35'
version "0.0.1"
lua54 'yes'

shared_scripts {
    '@es_extended/imports.lua',
    "config/shared/config.general.lua",
    "config/shared/config.translate.lua",
}

client_scripts {
    "config/client/config.functions.lua",
    "core/cl_main.lua",
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    "config/server/config.functions.lua",
    "core/sv_main.lua",
}

ui_page 'dist/index.html'

files {
    "dist/*",
    "dist/**/*"
}