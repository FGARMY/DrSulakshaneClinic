$files = @('Doctors.tsx','WhyUs.tsx','Services.tsx','Testimonials.tsx','CTA.tsx','Location.tsx')
foreach($f in $files) {
    $path = "d:\Dr Web\src\components\$f"
    $content = [System.IO.File]::ReadAllText($path)
    $content = $content.Replace('opacity-0 animate-', 'animate-')
    [System.IO.File]::WriteAllText($path, $content)
    Write-Host "Fixed: $f"
}
