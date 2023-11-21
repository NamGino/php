<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM diem";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3])){
            $sql .= "WHERE MaHS = :MaHS";
            $result = $conn->prepare($sql);
            $result->bindParam(':MaHS', $path[3]);
            $result->execute();
            $lms = $result->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $result = $conn->prepare($sql);
            $result->execute();
            $lms = $result->fetchAll(PDO::FETCH_ASSOC);
            
        }
        echo json_encode($lms);
        break;
    case "POST":
        $lms = json_decode(file_get_contents('php://input') );
        $sql = "INSERT INTO diem(hoc_sinh_MaHS, mon_hoc_MaMH, diem) VALUES(:hoc_sinh_MaHS, :mon_hoc_MaMH, :diem)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':hoc_sinh_MaHS',$lms->hoc_sinh_MaHS);
        $stmt->bindParam(':mon_hoc_MaMH',$lms->mon_hoc_MaMH);
        $stmt->bindParam(':diem',$lms->diem);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $lms = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE users SET MaHS= :MaHS, ten =:ten, nam_sinh =:nam_sinh, gioi_tinh =:gioi_tinh, lop_MaLop=:lop_MaLop, phu_huynh_MaPH=:phu_huynh_MaPH, so_hoc_phi_con_lai=:so_hoc_phi_con_lai WHERE MaHS = :MaHS";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':MaHS',$lms->MaHS);
        $stmt->bindParam(':ten',$lms->ten);
        $stmt->bindParam(':nam_sinh',$lms->nam_sinh);
        $stmt->bindParam(':gioi_tinh',$lms->gioi_tinh);
        $stmt->bindParam(':lop_MaLop',$lms->lop_MaLop);
        $stmt->bindParam(':phu_huynh_MaPH',$lms->phu_huynh_MaPH);
        $stmt->bindParam(':so_hoc_phi_con_lai',$lms->so_hoc_phi_con_lai);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM diem WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[2]);
        $stmt->execute();
        break;
}
?>