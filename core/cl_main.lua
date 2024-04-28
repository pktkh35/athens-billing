-- Variables
local BillList = {}

-- Thread
CreateThread(function ()
    while ESX == nil or not ESX.IsPlayerLoaded() do
        Wait(200)
    end
end)

-- Event
RegisterNetEvent("athens-billing:client:addBill", function(billInfo)

end)