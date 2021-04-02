<?php
//Testing

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once('../vendor/autoload.php');
require_once('../fpdf/fpdf.php');
require_once('../connection.php');

class PDF extends FPDF
{
// Cabecera de página
function Header()
{
    // Arial bold 15
    $this->SetFont('Arial','B',18);
    // Movernos a la derecha
    $this->Cell(50);
    // Título
    $this->Cell(70,10,'Reporte del paciente',0,0,'C');
    // Salto de línea
    $this->Ln(20);
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Número de página
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

$test = "SELECT * FROM examen WHERE estado='Realizado' AND id_paciente=".$_SESSION['id-p'];

$query = $link->query($test);

$count = 1;

$pdf = new PDF();
$pdf->AddPage();
$pdf->AliasNbPages();
$pdf->SetFont('Arial','B',16);

while($row = $query->fetch_assoc()){
  $pdf->Cell(120,10,"Examen Numero ".$count,1,1,'C',0);
  $pdf->Cell(120,10, $row['tipo_examen'],1,1,'C',0);
  $pdf->Cell(120,10, $row['descripcion'],1,1,'C',0);
  $pdf->Cell(120,10, $row['estado'],1,1,'C',0);
  $pdf->Cell(120,10,' ',0,1,'C',0);
  $count=$count+1;
}
  
$pdfdoc = $pdf->Output('','S'); 


$mail= new PHPMailer();

$mail->isSMTP();

$mail->SMTPAuth = true;

$mail->SMTPSecure = 'ssl';

$mail->Host = 'smtp.gmail.com';

$mail->Port = '465';

$mail->isHTML();

$mail->Username = 'phpmail98@gmail.com';

$mail->Password = 'phpmailer456';

$mail->SetFrom('no-reply@gmail.com');

$mail->Subject = "Laboratorio Mendirez:Reporte del Paciente";

$mail->Body = "Buenas tardes, en el correo tiene adjunto el reporte más reciente de los examenes realizados";

$mail->addStringAttachment($pdfdoc, 'reporte.pdf');

$mail->AddAddress($_SESSION['correo']);

$mail->Send();

echo '1';


?>