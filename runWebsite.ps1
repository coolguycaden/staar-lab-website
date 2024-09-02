Write-Host "Starting up local development server of STAAR-LAB on port 3000. A window will automatically pop up with server."
Write-Host "This command will also set up Pocketbase Server and open a window of that as well."
Write-Host "Press q in the terminal to end Pocketbase Server and Local Dev Server"

$pocketServer = Start-Process -FilePath "powershell" -ArgumentList "Invoke-Expression 'cmd /c start powershell -Command { Start-Process 'http://127.0.0.1:8090/_/#/login'; .\pocketbase serve}'" -PassThru
$pocketServer | Export-Clixml -Path (Join-Path $ENV:TEMP 'pocketbaseserver.xml')
# Invoke-Expression 'cmd /c start powershell -Command { Start-Process "http://localhost:3000/"; npm run dev'

"Press any key to end Next.js Server and Pocketbase Server: "
[bool]$userSure = 0

do { 
    if (([System.Console]::KeyAvailable)) {
        $userInput = Read-Host "Are you sure you want to end process? (Y/N)"
        switch ($userInput) {
            { @("y", "Y") } { $userSure = 1 }
            default {
                Write-Host "Invalid input or no was selected. Continuing servers."
            }
        }
    }
} until ((![System.Console]::KeyAvailable) -and (userSure))

$pocketServer | Stop-Process

# Start-Process "http://localhost:3000/"
# npm run dev


