import { Router, Response } from 'express';
import { RequestExtend } from '../../auth';
import allow from '../../helper/user-permission';
import { isValidObjectId } from 'mongoose';
import { BadRequest, SuccessfulResponse, ServerError } from '../../helper/http';
import {
  GetAllBuildings,
  GetBuildingById,
  CreateBuildingRecord,
  DeleteBuildingRecord,
} from '../../db/v1/buildings/controller';

const buildingsRouter = Router();
const scope = 'buildings';

buildingsRouter.get('/', allow(scope), (req: RequestExtend, res: Response) => {
  if (!isValidObjectId(req.params.id)) {
    return BadRequest(res);
  }

  return GetAllBuildings()
    .then((data) => {
      return SuccessfulResponse(res, data);
    })
    .catch((err) => {
      console.error(err.errors);
      return ServerError(res);
    });
});

buildingsRouter.get(
  '/:id',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return BadRequest(res);
    }

    return GetBuildingById(id)
      .then((data) => {
        return SuccessfulResponse(res, data);
      })
      .catch(({ errors }) => {
        console.error(errors);
        return ServerError(res, errors);
      });
  }
);

buildingsRouter.post('/', allow(scope), (req: RequestExtend, res: Response) => {
  return CreateBuildingRecord(req.body)
    .then((data) => {
      return SuccessfulResponse(res, data);
    })
    .catch(({ errors }) => {
      console.error(errors);
      return ServerError(res, errors);
    });
});

buildingsRouter.put(
  '/:id',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return BadRequest(res);
    }
    return CreateBuildingRecord(req.body)
      .then((data) => {
        return SuccessfulResponse(res, data);
      })
      .catch(({ errors }) => {
        console.error(errors);
        return ServerError(res, errors);
      });
  }
);

buildingsRouter.delete(
  '/:id',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return BadRequest(res);
    }
    return DeleteBuildingRecord(id)
      .then((deleted) => {
        return SuccessfulResponse(res, { deleted });
      })
      .catch(({ errors }) => {
        console.error(errors);
        return ServerError(res, errors);
      });
  }
);

export default buildingsRouter;
