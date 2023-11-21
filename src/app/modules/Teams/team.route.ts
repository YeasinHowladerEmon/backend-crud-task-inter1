import  express  from 'express';
import { TeamController } from './team.controller';
const router = express.Router();

router.post('/create-team', TeamController.createTeam)

router.get('/:id', TeamController.getTeamById)
router.get('/', TeamController.getTeam)

export const TeamsRoutes = router;