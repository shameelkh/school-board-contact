package ws;

import domain.SchoolBoard;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SchoolBoardController {

    @CrossOrigin
    @RequestMapping(path = "/school-board/{boardNumber}", method = RequestMethod.GET)
    public ResponseEntity getSchoolBoard(@PathVariable int boardNumber) {

        SchoolBoard schoolBoard = Application.boardsMap.get(boardNumber);

        return new ResponseEntity(schoolBoard, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(path = "/school-board", method = RequestMethod.POST)
    public ResponseEntity saveSchoolBoard(@RequestBody SchoolBoard schoolBoard) {

        Application.boardsMap.put(schoolBoard.getBoardNumber(), schoolBoard);

        return new ResponseEntity(schoolBoard, HttpStatus.OK);
    }
}
