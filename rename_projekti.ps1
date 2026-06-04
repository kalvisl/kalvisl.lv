# PowerShell script to rename project folders and images in projekti/
# Naming convention: folders use underscores, images use projectname-number.ext

$projektiPath = "c:\Users\kalvi\Documents\_kalvisl.lv\projekti"

Write-Host "=== STEP 1: Rename folders (spaces -> underscores) ===" -ForegroundColor Cyan

# Define folder renames: old name -> new name
$folderRenames = @{
    "Avotu iela 5" = "Avotu_iela_5"
    "Brivibas 97a" = "Brivibas_97a"
    "Ciboli-Alviki Rucava" = "Ciboli_Alviki_Rucava"
    "Gerberu 4 Marupe" = "Gerberu_4_Marupe"
    "Kazdangas 35" = "Kazdangas_35"
    "Klaipedas 29" = "Klaipedas_29"
    "Lielas Dianas" = "Lielas_Dianas"
    "Pupu iela" = "Pupu_iela"
    "Reki Bernati" = "Reki_Bernati"
    "Sabri Jurmalciems" = "Sabri_Jurmalciems"
    "Sarmites" = "Sarmites"
    "Strautu 6" = "Strautu_6"
    "Strengi Jurmalciems" = "Strengi_Jurmalciems"
}

# First, rename all folders
foreach ($old in $folderRenames.Keys) {
    $oldPath = Join-Path $projektiPath $old
    $newPath = Join-Path $projektiPath $folderRenames[$old]
    if (Test-Path $oldPath) {
        Write-Host "Renaming folder: '$old' -> '$($folderRenames[$old])'" -ForegroundColor Yellow
        Rename-Item -Path $oldPath -NewName $folderRenames[$old]
    } else {
        Write-Host "Folder not found (may already be renamed): '$old'" -ForegroundColor Gray
    }
}

Write-Host "`n=== STEP 2: Rename image files inside each folder ===" -ForegroundColor Cyan

# Define image renames per folder: old filename -> new filename
# Using the convention: projectname-number.ext
$imageRenames = @{
    "Avotu_iela_5" = @(
        @("MBP-AR-7-Avotu-5-20240610.jpg", "avotu-iela-5-1.jpg"),
        @("MBP-AR-8-Avotu-5-20240610.jpg", "avotu-iela-5-2.jpg"),
        @("MBP-AR-9-Avotu-5-20240610.jpg", "avotu-iela-5-3.jpg"),
        @("MBP-AR-10-Avotu-5-20240610.jpg", "avotu-iela-5-4.jpg")
    )
    "Brivibas_97a" = @(
        @("1.webp", "brivibas-97a-1.webp"),
        @("2.webp", "brivibas-97a-2.webp")
    )
    "Ciboli_Alviki_Rucava" = @(
        @("AR_Alviki_Nida-5.jpg", "ciboli-alviki-rucava-1.jpg")
    )
    "Dzelzscelnieku_1_viz" = @(
        @("Gemini_Generated_Image_5v8qhs5v8qhs5v8q-clean.jpg", "dzelzscelnieku-1-viz-1.jpg"),
        @("Gemini_Generated_Image_8yth8o8yth8o8yth-clean.jpg", "dzelzscelnieku-1-viz-2.jpg"),
        @("Gemini_Generated_Image_715o37715o37715o-clean.jpg", "dzelzscelnieku-1-viz-3.jpg"),
        @("Gemini_Generated_Image_atm35atm35atm35a-clean.jpg", "dzelzscelnieku-1-viz-4.jpg"),
        @("Gemini_Generated_Image_b2s29pb2s29pb2s2-clean.jpg", "dzelzscelnieku-1-viz-5.jpg"),
        @("Gemini_Generated_Image_loz83aloz83aloz8-clean.jpg", "dzelzscelnieku-1-viz-6.jpg"),
        @("Gemini_Generated_Image_obg4z2obg4z2obg4-clean.jpg", "dzelzscelnieku-1-viz-7.jpg"),
        @("Gemini_Generated_Image_yefdhlyefdhlyefd-clean.jpg", "dzelzscelnieku-1-viz-8.jpg"),
        @("kl_27042020_2.jpg", "dzelzscelnieku-1-viz-9.jpg")
    )
    "Gerberu_4_Marupe" = @(
        @("Gemini_Generated_Image_c7utxoc7utxoc7ut-clean.png", "gerberu-4-marupe-1.png"),
        @("Gemini_Generated_Image_vhapnlvhapnlvhap-clean.png", "gerberu-4-marupe-2.png")
    )
    "Kazdangas_35" = @(
        @("kazdangas-1.webp", "kazdangas-35-1.webp"),
        @("kazdangas-2.webp", "kazdangas-35-2.webp")
    )
    "Klaipedas_29" = @(
        @("AR-2.jpg", "klaipedas-29-1.jpg")
    )
    "Lielas_Dianas" = @(
        @("2023-06-27-15-42-24.png", "lielas-dianas-1.png")
    )
    "Pupu_iela" = @(
        @("AR-9_FASADE-ASIS-7-1,-A-E_BP.jpg", "pupu-iela-1.jpg")
    )
    "Reki_Bernati" = @(
        @("AR-5_FASADES-ASIS-B-A,-1-2.jpg", "reki-bernati-1.jpg"),
        @("AR-6_FASADES-ASIS-A-B,-2-1.jpg", "reki-bernati-2.jpg")
    )
    "Sabri_Jurmalciems" = @(
        @("sabri.webp", "sabri-jurmalciems-1.webp"),
        @("sabri-2.webp", "sabri-jurmalciems-2.webp")
    )
    "Sarmites" = @(
        @("Gemini_Generated_Image_31vq4031vq4031vq-clean.jpg", "sarmites-1.jpg"),
        @("Gemini_Generated_Image_31vq4031vq4031vq-clean.png", "sarmites-2.png")
    )
    "Strautu_6" = @(
        @("BP_AR---Strautu-6-8.jpg", "strautu-6-1.jpg")
    )
    "Strengi_Jurmalciems" = @(
        @("Gemini_Generated_Image_xvpa1qxvpa1qxvpa.jpg", "strengi-jurmalciems-1.jpg")
    )
}

foreach ($folder in $imageRenames.Keys) {
    $folderPath = Join-Path $projektiPath $folder
    if (-not (Test-Path $folderPath)) {
        Write-Host "Folder not found: '$folder'" -ForegroundColor Red
        continue
    }
    
    Write-Host "Processing folder: $folder" -ForegroundColor Green
    foreach ($rename in $imageRenames[$folder]) {
        $oldFile = $rename[0]
        $newFile = $rename[1]
        $oldPath = Join-Path $folderPath $oldFile
        $newPath = Join-Path $folderPath $newFile
        
        if (Test-Path $oldPath) {
            Write-Host "  Renaming: '$oldFile' -> '$newFile'" -ForegroundColor Yellow
            Rename-Item -Path $oldPath -NewName $newFile
        } else {
            Write-Host "  File not found: '$oldFile'" -ForegroundColor Gray
        }
    }
}

Write-Host "`n=== DONE ===" -ForegroundColor Green
Write-Host "Folders and images renamed successfully!" -ForegroundColor Green
