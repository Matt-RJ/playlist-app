import express from 'express';
import {playlistCollection} from './playlistcollection';

const router = express.Router();
router.get('/', (req, res) => {
  res.send({playlistCollection: playlistCollection});
});

export default router;