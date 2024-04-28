--------------------------------------------------
-- 🐌  Author   : ATHENS STUDIO
-- 💬  Discord  : https://discord.gg/6fFSqbtxGV
--------------------------------------------------
Notify = function(text, type)
    exports['athens-notify']:Alert({
        type = type or 'info',
        title = "System",
        description = text
    })
end
