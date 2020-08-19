import { Router, Response } from 'express';
import { RequestExtend } from '../../auth';
import allow from '../../helper/user-permission';
import { isValidObjectId } from 'mongoose';
import {
  ServerError,
  SuccessfulResponse,
  BadRequest,
  NotFound,
} from '../../helper/http';
import {
  CreateClass,
  GetAllClassRooms,
  DeleteClass,
  UpdateClass,
  GetSingleClassRoom,
} from '../../db/v1/classes/controller';
import {
  Create,
  GetAllClassAvailability,
  UpdateAvailability,
  FindOneClassAvailability,
} from '../../db/v1/classes/availability/controller';

const classesRouter = Router();
const scope = 'classes';

// Get all class rooms
classesRouter.get(
  '/',
  allow(scope),
  async (_: RequestExtend, res: Response) => {
    return GetAllClassRooms()
      .then((data) => {
        return SuccessfulResponse(res, data);
      })
      .catch((error) => ServerError(res, error));
  }
);

// Get single class rooms
classesRouter.get(
  '/:classId',
  allow(scope),
  async (req: RequestExtend, res: Response) => {
    const { classId } = req.params;
    if (!isValidObjectId(classId)) {
      return BadRequest(res);
    }

    return GetSingleClassRoom({ _id: classId })
      .then((data) => {
        if (!data) {
          return NotFound(res)
        }
        return SuccessfulResponse(res, data);
      })
      .catch((error) => ServerError(res, error));
  }
);

// Create a class rooms
classesRouter.post('/', allow(scope), (req: RequestExtend, res: Response) => {
  const { classId } = req.params;
  if (!isValidObjectId(classId)) {
    return BadRequest(res);
  }

  return CreateClass(req.body)
    .then(({ _id }) => GetSingleClassRoom({ _id }))
    .then((classRoom) => {
      if (!classRoom) {
        return ServerError(
          res,
          'Trying to retrieve class room after creation failed'
        );
      }
      return SuccessfulResponse(res, classRoom);
    })
    .catch(({ errors }) => ServerError(res, errors));
});

// Delete a class rooms
classesRouter.delete(
  '/:classId',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { classId } = req.params;
    if (!isValidObjectId(classId)) {
      return BadRequest(res);
    }

    return DeleteClass(classId)
      .then((deleted) => {
        SuccessfulResponse(res, { deleted });
      })
      .catch(({ error }) => ServerError(res, error));
  }
);

// Update a class rooms
classesRouter.put(
  '/:classId',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { classId } = req.params;
    if (!isValidObjectId(classId)) {
      return BadRequest(res);
    }

    return UpdateClass(classId, req.body)
      .then((updatedData) => {
        if (!updatedData) {
          return ServerError(
            res,
            `No class was found with the id ${classId} or failed to update`
          );
        }
        return SuccessfulResponse(res, updatedData);
      })
      .catch(({ error }) => ServerError(res, error));
  }
);

// Create availability for a class rooms
classesRouter.post(
  '/:classId/availability',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { classId } = req.params;
    if (!isValidObjectId(classId)) {
      return BadRequest(res);
    }

    return Create(classId, req.body)
      .then((d) => {
        SuccessfulResponse(res, d);
      })
      .catch(({ errors }) => ServerError(res, errors));
  }
);

// Get availability for a class rooms
classesRouter.get(
  '/:classId/availability',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { classId } = req.params;
    if (!isValidObjectId(classId)) {
      return BadRequest(res);
    }

    return GetAllClassAvailability(classId)
      .then((d) => {
        SuccessfulResponse(res, d);
      })
      .catch(({ errors }) => ServerError(res, errors));
  }
);

// Get a specific availability for a class rooms
classesRouter.get(
  '/:classId/availability/:availabilityId',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { availabilityId } = req.params;
    if (!isValidObjectId(availabilityId)) {
      return BadRequest(res);
    }

    return FindOneClassAvailability(availabilityId)
      .then((data) => {
        if (!data) {
          return NotFound(
            res,
            `No availability was found with the id ${availabilityId} or failed to update`
          );
        }
        return SuccessfulResponse(res, data);
      })
      .catch(({ errors }) => ServerError(res, errors));
  }
);

// Update a specific availability for a class rooms
classesRouter.put(
  '/:classId/availability/:availabilityId',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const { availabilityId } = req.params;
    if (!isValidObjectId(availabilityId)) {
      return BadRequest(res);
    }

    return UpdateAvailability(availabilityId, req.body)
      .then((data) => {
        if (!data) {
          return NotFound(
            res,
            `No availability was found with the id ${availabilityId} or failed to update`
          );
        }
        return SuccessfulResponse(res, data);
      })
      .catch(({ errors }) => ServerError(res, errors));
  }
);

export default classesRouter;
