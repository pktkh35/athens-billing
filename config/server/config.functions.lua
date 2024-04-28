--------------------------------------------------
-- 🐌  Author   : ATHENS STUDIO
-- 💬  Discord  : https://discord.gg/6fFSqbtxGV
--------------------------------------------------
Notify = function(playerId, text, type)
    exports['athens-notify']:Alert(playerId, {
        type = type or 'info',
        title = "System",
        description = text
    })
end
